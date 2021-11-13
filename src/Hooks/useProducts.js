import { useEffect, useState } from "react";

const useProducts = () => {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://lit-falls-18743.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return { products, setOrderSuccess, orderSuccess };
};

export default useProducts;
