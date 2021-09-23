import "./Product.css";
let Product = props => {
  let { name, img, category, star, starCount, price, stock } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="content">
        <h1>{name}</h1>
        <small>Category : {category}</small>
        <br />
        <small className="stock">{stock} products in stock &#128522;</small>
        <p>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </p>
        <h2> ${price}</h2>

        <button onClick={() => props.handleAddToCart(props.product)}>
          Add to Cart <i class="fas fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
