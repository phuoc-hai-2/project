import Headers from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProduct";
import Container from "react-bootstrap/Container";
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
      </Container>
    </>
  );
};
export default Home;
