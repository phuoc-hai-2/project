import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />

      <Card.Body>
        <Card.Title>{product.name}</Card.Title>

        <Card.Text>Giá: {product.price} VND</Card.Text>

        <Card.Text>{product.category}</Card.Text>

        <Button variant="primary">Giỏ Hàng</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
