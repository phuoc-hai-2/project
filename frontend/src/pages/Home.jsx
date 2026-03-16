import { useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProduct";
import Container from "react-bootstrap/Container";
<<<<<<< HEAD
import Badge from "react-bootstrap/Badge";

const Home = () => {
  const products = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <>
      <Header />
      <Container className="my-5">
        <h2 className="text-center mb-4 fw-bold text-primary">
          Khám Phá Sản Phẩm
        </h2>

        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          <Badge
            pill
            bg={selectedCategory === "" ? "primary" : "light"}
            text={selectedCategory === "" ? "light" : "dark"}
            style={{
              cursor: "pointer",
              fontSize: "14px",
              padding: "10px 20px",
              border: "1px solid #dee2e6",
            }}
            onClick={() => setSelectedCategory("")}
          >
            Tất cả
          </Badge>
          {categories.map((cat, index) => (
            <Badge
              key={index}
              pill
              bg={selectedCategory === cat ? "primary" : "light"}
              text={selectedCategory === cat ? "light" : "dark"}
              style={{
                cursor: "pointer",
                fontSize: "14px",
                padding: "10px 20px",
                border: "1px solid #dee2e6",
              }}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center text-muted">
            Không tìm thấy sản phẩm nào.
          </div>
        ) : (
          <div className="d-flex flex-wrap gap-4 justify-content-center">
            {filteredProducts.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        )}
=======
const Home = () => {
  const products = useProducts();
  return (
    <>
      <Headers />
      <Container className="my-4">
        <h2 className="text-center mb-3">Sản phẩm mới nhất</h2>
        <div className="d-flex flex-wrap gap-3">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
>>>>>>> parent of d0c9677 (feat: frontend)
      </Container>
    </>
  );
};

export default Home;
