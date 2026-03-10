import Product from '../models/Product.js';
import { getAllProductsService, getProductByIdService } from '../services/productService.js';

// @desc    Lấy tất cả sản phẩm (có hỗ trợ tìm kiếm theo từ khóa)
// @route   GET /api/products?keyword=dien-thoai
export const getProducts = async (req, res) => {
  try {
    // Lấy từ khóa người dùng gõ trên thanh địa chỉ (nếu có)
    const keyword = req.query.keyword; 
    
    // Gọi Service xử lý phần lấy data
    const products = await getAllProductsService(keyword);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Lỗi máy chủ khi lấy danh sách sản phẩm" });
  }
};

// @desc    Lấy chi tiết 1 sản phẩm bằng ID
// @route   GET /api/products/:id
export const getProductById = async (req, res) => {
  try {
    const product = await getProductByIdService(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc    Tạo một sản phẩm số mới (Kho Key ban đầu sẽ rỗng)
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = async (req, res) => {
  try {
    const { name, price, image, description, category, productType } = req.body;

    const product = new Product({
      name,
      price,
      image,
      category,
      description,
      productType: productType || 'Key', // Mặc định là bán Key tự động
      digitalVault: [], // Khởi tạo kho rỗng, Admin sẽ nạp Key vào sau
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi tạo sản phẩm mới', error: error.message });
  }
};

// @desc    Nhập kho (Thêm hàng loạt mã Key vào kho bí mật của 1 sản phẩm)
// @route   POST /api/products/:id/keys
// @access  Private/Admin
export const addKeysToVault = async (req, res) => {
  try {
    const { keys } = req.body; // Frontend sẽ gửi lên 1 mảng: ["ABCD-1234", "WXYZ-5678"]
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
    }

    if (product.productType !== 'Key') {
      return res.status(400).json({ message: 'Sản phẩm này là Dịch vụ, không cần nhập Key' });
    }

    // Biến mảng chuỗi thành mảng Object đúng chuẩn của schema
    const newKeys = keys.map(k => ({ 
      content: k, 
      isSold: false 
    }));

    // Bơm Key mới vào kho
    product.digitalVault.push(...newKeys);
    
    await product.save();
    res.status(201).json({ 
      message: `Đã nạp thành công ${keys.length} mã Key vào kho!`,
      totalInStock: product.digitalVault.filter(k => !k.isSold).length 
    });

  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi nhập kho Key', error: error.message });
  }
};