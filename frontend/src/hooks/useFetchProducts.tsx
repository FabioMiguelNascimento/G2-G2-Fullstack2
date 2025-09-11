import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function useFetchProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    const products = await axios('http://localhost:8888/api/product/')

    console.log(products.request.response)
    setProducts(products.request.response)
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      await fetchProducts();
    };
    loadProducts();
  }, [fetchProducts]);

  return { products }
}
