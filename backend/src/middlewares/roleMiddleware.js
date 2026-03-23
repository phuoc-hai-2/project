// Middleware kiểm tra quyền Admin
export const admin = (req, res, next) => {
  // Biến req.user đã được lấy từ hàm 'protect' chạy trước đó
  if (req.user && req.user.isAdmin) {
    next(); // Nếu là Admin, cho phép đi tiếp đến Controller
  } else {
    res.status(403).json({ message: 'Không có quyền truy cập. Yêu cầu tài khoản Admin!' });
  }
};