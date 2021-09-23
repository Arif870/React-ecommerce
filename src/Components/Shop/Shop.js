import Products from "./Products/Products";
import "./Shop.css";
import Summary from "./Summary/Summary";
const Shop = () => {
  return (
    <div className="shop">
      <Products />
      <Summary />
    </div>
  );
};

export default Shop;
