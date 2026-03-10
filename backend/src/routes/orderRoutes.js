import express from 'express';
import { addOrderItems } from '../controllers/orderController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route này yêu cầu phải đi qua trạm kiểm duyệt 'protect' (phải đăng nhập)
router.post('/', protect, addOrderItems);

export default router;