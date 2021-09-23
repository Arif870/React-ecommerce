import "./Summary.css";
const Summary = () => {
  return (
    <div className="summary">
      <h1>Total Order Summery</h1>
      <h4>Total items in Cart : 10</h4>

      <div className="summary-content">
        <div className="name">
          <p>Items : </p>
          <p>Shipping : </p>
          <p>Total before Tax : </p>
          <p>Estimated Tax : </p>
          <p>Order total : </p>
        </div>
        <div className="price">
          <p>$ 1299.09</p>
          <p>$ 30.00</p>
          <p>$ 10.29</p>
          <p>$ 126.49</p>
          <p>$ 12344.78</p>
        </div>
      </div>
      <button>Place Order</button>
    </div>
  );
};
export default Summary;
