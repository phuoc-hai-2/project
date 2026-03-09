import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    // 1. Ai là người đặt hàng? (Liên kết với bảng User)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', 
    },
    // 2. Danh sách sản phẩm trong đơn hàng này (Mảng)
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product', // Liên kết với bảng Product
        },
      },
    ],
    // 3. Địa chỉ giao hàng
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    // 4. Phương thức thanh toán (Ví dụ: 'Tiền mặt', 'VNPay')
    paymentMethod: {
      type: String,
      required: true,
    },
    // 5. Kết quả thanh toán (Sẽ dùng để lưu mã giao dịch từ VNPay trả về sau này)
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    // 6. Các loại phí (Tiền hàng, Phí ship, Tổng tiền)
    itemsPrice: { type: Number, required: true, default: 0.0 },
    shippingPrice: { type: Number, required: true, default: 0.0 },
    totalPrice: { type: Number, required: true, default: 0.0 },
    
    // 7. Trạng thái thanh toán và giao hàng
    isPaid: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, required: true, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true, // Tự động tạo createdAt và updatedAt
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;