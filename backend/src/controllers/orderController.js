import Order from '../models/Order.js';

// @desc    Tạo đơn hàng sản phẩm số mới
// @route   POST /api/orders
// @access  Private (Chỉ user đã đăng nhập)
export const addOrderItems = async (req, res) => {
  try {
    const {
      orderItems,
      digitalDeliveryInfo, // Đã thay thế cho shippingAddress
      paymentMethod,
      totalPrice,          // Đã bỏ itemsPrice và shippingPrice cho gọn
    } = req.body;

    // Kiểm tra xem giỏ hàng có rỗng không
    if (orderItems && orderItems.length === 0) {
      return res.status(400).json({ message: 'Không có sản phẩm nào trong đơn hàng' });
    } else {
      // Tạo đơn hàng mới
      const order = new Order({
        user: req.user._id, // Gắn ID người mua từ Token
        orderItems,
        digitalDeliveryInfo, // Lưu email/tài khoản cần nâng cấp
        paymentMethod,
        totalPrice,
        // Lưu ý: Trường status sẽ tự động được gán là 'Pending' (Chờ thanh toán) nhờ thiết lập default trong Model
      });

      // Lưu vào Database
      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    }
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server khi tạo đơn hàng', error: error.message });
  }
};