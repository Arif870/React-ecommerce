import "./Products.css";
import { useState, useEffect } from "react";
import Product from "./Product/Product";
const Products = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then(response => response.json())
      .then(data => setproducts(data));
  }, []);

  const handleAddToCart = product => {
    console.log(product);
  };

  let { key } = products;
  return (
    <div>
      <h1>Our Recent Products</h1>
      {products.map(product => (
        <Product
          product={product}
          key={key}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};
export default Products;
