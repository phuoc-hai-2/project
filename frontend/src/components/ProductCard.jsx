import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
<<<<<<< HEAD
import { deleteProduct } from "../services/productService";
=======
>>>>>>> parent of d0c9677 (feat: frontend)

const ProductCard = ({ product }) => {
  return (
<<<<<<< HEAD
    <Card
      className="shadow-sm border-0 h-100"
      style={{ width: "16rem", transition: "transform 0.2s" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div
        style={{
          overflow: "hidden",
          borderTopLeftRadius: "var(--bs-card-inner-border-radius)",
          borderTopRightRadius: "var(--bs-card-inner-border-radius)",
        }}
      >
        <Card.Img
          variant="top"
          src={`http://localhost:5000${product.image}`}
          onClick={goToDetail}
          style={{ height: "180px", objectFit: "cover", cursor: "pointer" }}
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title
          onClick={goToDetail}
          className="text-dark fw-bold mb-2 text-truncate"
          style={{ cursor: "pointer", fontSize: "1.1rem" }}
        >
          {product.name}
        </Card.Title>
        <Card.Text className="text-muted small mb-2">
          {product.category}
        </Card.Text>
        <Card.Text className="fw-bold text-danger fs-5 mb-3 mt-auto">
          {product.price.toLocaleString()} đ
        </Card.Text>

        <Button
          variant="outline-primary"
          className="w-100 fw-bold mb-2"
          onClick={handleAddToCart}
        >
          <i className="bi bi-cart-plus me-2"></i>Thêm Giỏ Hàng
        </Button>

        {userInfo && userInfo.role === "admin" && (
          <div className="d-flex justify-content-between mt-2">
            <Button
              variant="warning"
              size="sm"
              className="w-50 me-1 fw-bold text-dark"
              onClick={handleEdit}
            >
              Sửa
            </Button>
            <Button
              variant="danger"
              size="sm"
              className="w-50 ms-1 fw-bold"
              onClick={handleDelete}
            >
              Xóa
            </Button>
          </div>
        )}
=======
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />

      <Card.Body>
        <Card.Title>{product.name}</Card.Title>

        <Card.Text>Giá: {product.price} VND</Card.Text>

        <Card.Text>{product.category}</Card.Text>

        <Button variant="primary">Giỏ Hàng</Button>
>>>>>>> parent of d0c9677 (feat: frontend)
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
