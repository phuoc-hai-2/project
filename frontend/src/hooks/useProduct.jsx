import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProducts } from "../services/productService";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("keyword") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts(keyword);
        setProducts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [keyword]);

  return products;
};
