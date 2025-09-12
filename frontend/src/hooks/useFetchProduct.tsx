import type { Product } from "@/schemas/product.schema";
import api from "@/utils/api";
import { useState, useEffect } from "react";

interface GetProductResponse {
  code: number,
  message: string,
  data: Product
}

export default function useFetchProduct(id: string | null) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setProduct(null);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get<GetProductResponse>(`/product/${id}`, {
          signal: controller.signal,
        });
        setProduct(response.data.data);
      } catch (err: any) {
        if (err.name === "CanceledError" || err.name === "AbortError") return;
        console.error(err);
        setError(err?.message ?? "Erro ao carregar produto");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    return () => controller.abort();
  }, [id]);

  return { product, loading, error };
}