import FoodItems from "./FoodItems";

// import '../drinksComposition/style/styles.css'
const FoodCard = ({ id, image, title, price, description, addItemsToCart }) => {
  return (
    <>
      <div className="cards">
        <img src={image} alt="Food Items" />
        <div className="container">
          <h1>{title}</h1>
          <h4>Rs. {price}</h4>
          <p>{description}</p>
          <button
            className="orderbutton"
            onClick={() =>
              addItemsToCart({ id, image, title, price, description })
            }
          >
            <strong>Order</strong>
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
