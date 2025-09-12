import api from '@/utils/api';
import { useState, useEffect } from 'react';

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await api.get('/product');
      setProducts(response.data.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchProducts();
}, []);

  return { products, loading, error };
};