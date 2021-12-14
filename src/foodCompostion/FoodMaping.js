import FoodCard from "./FoodCard";
import FoodItems from "./FoodItems";
import "../drinksComposition/style/styles.css";
import "./FoodCard";
import Header from "../Header";
import { FaJava, FaTimesCircle, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";

const FoodMaping = () => {
  const [cart, setCart] = useState([]);

  const addItemsToCart = (item) => {
    let ifExit = cart.some((data) => {
      return data.id === item.id;
    });
    //Finding the index of an object inside array
    if (ifExit === true) {
      let indexOfItem = cart.findIndex((data) => {
        return data.id === item.id;
      });
      let currentCart = [...cart];
      currentCart[indexOfItem].quantity = currentCart[indexOfItem].quantity + 1;
      setCart(currentCart);
    } else {
      //if data.id is
      item = { ...item, quantity: 1 };
      let currentCart = [...cart, item];
      setCart(currentCart);
    }
  };

  const totalAmount = () => {
    let totalSum = 0;
    for (let data of cart) {
      let totalItemSum = data.quantity * data.price;
      totalSum = totalItemSum + totalSum;
    }
    let vat = parseFloat((totalSum * 0.13).toFixed(2));
    let withVAT = parseFloat((totalSum + vat).toFixed(2));
    let serviceCharge = parseFloat((withVAT * 0.05).toFixed(2));
    return { vat, totalSum, withVAT, serviceCharge };
  };

  //food all item cancel handler
  const foodCancelHandler = () => {
    setCart([]);
  };
  //individual order item delete button handler
  const foodDeleteHandler = (index) => {
    let currentFoodItem = [...cart];
    currentFoodItem.splice(index, 1);
    setCart(currentFoodItem);
  };

  return (
    <>
      <Header title="Food Menu" />

      <div className="grid-container">
        <div className="fooditemscss">
          {FoodItems.map((foodMap) => {
            return (
              <FoodCard
                addItemsToCart={addItemsToCart}
                id={foodMap.id}
                image={foodMap.image}
                title={foodMap.title}
                price={foodMap.price}
                description={foodMap.description}
                key={foodMap.id}
              />
            );
          })}
        </div>

        <div className="billSection">
          <div className="billhead">
            <h1>
              Cafe <FaJava /> Code
            </h1>
            <details>
              <p>Founder: Dipesh Mishra</p>
              <p>Kathmandu Nepal</p>
              <p>+97798100000**</p>
            </details>
          </div>
          {cart.map((data, index) => {
            return (
              <div key={data.id} className="data">
                {/* Id: {data.id} <br /> */}
                <img src={data.image} style={{ width: 60, height: 60 }} />
                <br />
                Name: {data.title} <br />
                Price: {data.price} <br />
                {/* D{data.description} */}
                Quantity:{data.quantity}
                <br />
                <button
                  onClick={() => foodCancelHandler(index)}
                  style={{ backgroundColor: "red", color: "white", padding: 6 }}
                >
                  <FaTrashAlt />
                </button>
                <hr />
                Total Price : {data.price * data.quantity}
                <hr />
                <hr />
              </div>
            );
          })}
          <div className="result">
            Without VAT: Npr {totalAmount().totalSum} <br />
            13% VAT: Npr {totalAmount().vat} <br />
            Service Charge : Npr {totalAmount().serviceCharge} <br />
            Total Amount:Npr{" "}
            {totalAmount().withVAT + totalAmount().serviceCharge}
            {cart.length > 0 ? (
              <button onClick={foodCancelHandler}>
                <FaTimesCircle />
                Cancel Order
              </button>
            ) : null}
            <br />
          </div>
          <footer>Keep Smilimg</footer>
        </div>
      </div>
    </>
  );
};

export default FoodMaping;
