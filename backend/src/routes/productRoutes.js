import express from 'express';
// Nhập thêm 2 hàm mới dành cho Admin từ Controller
import { getProducts, getProductById, createProduct, addKeysToVault } from '../controllers/productController.js';
import { protect } from '../middlewares/authMiddleware.js'; // Vệ sĩ kiểm tra đăng nhập
import { admin } from '../middlewares/roleMiddleware.js';   // Vệ sĩ kiểm tra quyền Admin

const router = express.Router();

// Route cho khách hàng (Ai cũng xem được)
router.get('/', getProducts);
router.get('/:id', getProductById);

// Route cho Admin (Phải qua 2 lớp bảo vệ)
// 1. Tạo sản phẩm mới (Thay thế đoạn code test cũ của bạn)
router.post('/', protect, admin, createProduct);

// 2. Nạp thêm mã Key vào kho cho 1 sản phẩm cụ thể
router.post('/:id/keys', protect, admin, addKeysToVault);

export default router;