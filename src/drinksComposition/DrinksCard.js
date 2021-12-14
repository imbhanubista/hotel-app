import "./style/styles.css";
const DrinksCard = ({ id, image, title, price, description,addToCart}) => {
  return (
    <>
      <div className="cards">
        <img src={image} alt="Items Images are Displayed here" />
        <div className="container">
          <h1> {title} </h1>
          <h4>Rs. {price}</h4>
          <p>{description}</p>
          <button
            className="orderbutton"
            onClick={() =>
                addToCart({ id, image, title, price, description })
              }
          >
            <strong>Order</strong>
          </button>
        </div>
      </div>
    </>
  );
};

export default DrinksCard;
