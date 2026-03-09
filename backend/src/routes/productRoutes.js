import express from 'express';
import { getProducts, getProductById } from '../controllers/productController.js';
import { protect } from '../middlewares/authMiddleware.js'; // Gọi vệ sĩ kiểm tra đăng nhập
import { admin } from '../middlewares/roleMiddleware.js';   // Gọi vệ sĩ kiểm tra quyền Admin

const router = express.Router();

// Ai cũng xem được danh sách sản phẩm (Không cần bảo vệ)
router.get('/', getProducts);
router.get('/:id', getProductById);

// CHỈ ADMIN mới được thêm sản phẩm mới
// Lưu ý thứ tự: Phải qua cửa 'protect' trước, rồi mới tới cửa 'admin'
router.post('/', protect, admin, (req, res) => {
    res.json({ message: 'Bạn là Admin, bạn được phép thêm sản phẩm!' });
});

export default router;