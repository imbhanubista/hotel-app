import DrinksCard from "./DrinksCard";
import DrinkItems from "./DrinksItems";
import "./style/styles.css";
import Header from "../Header";
import { FaJava, FaTimesCircle, FaTrashAlt } from "react-icons/fa";

import { useState } from "react";

const DrinksMap = () => {
  const [cartArr, setCartArr] = useState([]);

  const addToCart = (item) => {
    let ifExit = cartArr.some((data) => {
      return data.id === item.id;
    });
    //Finding the index of an object inside array
    if (ifExit === true) {
      let indexOfItem = cartArr.findIndex((data) => {
        return data.id === item.id;
      });
      let currentCart = [...cartArr];
      currentCart[indexOfItem].quantity = currentCart[indexOfItem].quantity + 1;
      setCartArr(currentCart);
    } else {
      //if data.id is
      item = { ...item, quantity: 1 };
      let currentCart = [...cartArr, item];
      setCartArr(currentCart);
    }
  };

  const totalBill = () => {
    let finalSum = 0;
    for (let data of cartArr) {
      let totalBillOfItem = data.quantity * data.price;
      finalSum = totalBillOfItem + finalSum;
    }
    let vat = parseFloat((finalSum * 0.13).toFixed(2));
    let withVAT = parseFloat((finalSum + vat).toFixed(2));
    let service = parseFloat((withVAT * 0.05).toFixed(2));
    return { vat, withVAT, service, finalSum };
  };

  const deleteHandler = (index) => {
    let orderedData = [...cartArr];
    orderedData.splice(index, 1);
    setCartArr(orderedData);
  };
  const cancelHandler = () => {
    setCartArr([]);
  };

  return (
    <>
      <Header title="Drinks Items" />
      <div className="grid-container">
        <div className="foodItems">
          {DrinkItems.map((drinkData) => {
            return (
              <DrinksCard
                addToCart={addToCart}
                id={drinkData.id}
                image={drinkData.image}
                title={drinkData.title}
                price={drinkData.price}
                description={drinkData.description}
                key={drinkData.id}
              />
            );
          })}
        </div>

        {/* //To dasplay ordered item and Bill in grid */}

        <div className="billSection">
          <div className="billhead">
            <h1>
              Cafe <FaJava /> Code
            </h1>
            <details>
              <p>Founder: Dipesh Bhanu</p>
              <p>Kathmandu Nepal</p>
              <p>+97798100000**</p>
            </details>
          </div>
          {/* //Mapping ordered data that are stored inside cart array */}
          {cartArr.map((data, index) => {
            return (
              <div key={data.id} className="data">
                <img src={data.image} style={{ width: 60, height: 60 }} />{" "}
                <br />
                Drink: {data.title} <br />
                Price:Npr. {data.price} <br />
                Quantity: {data.quantity} <br />
                <button
                  onClick={() => deleteHandler(index)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "6px",
                  }}
                >
                  <FaTrashAlt />
                </button>
                <hr />
                Total Price:Npr. {data.price * data.quantity} <hr /> <hr />
              </div>
            );
          })}

          <div className="result">
            Without Vat :Npr. {totalBill().finalSum} <br />
            13% VAT:Npr. {totalBill().vat} <br />
            Service Charge:Npr. {totalBill().service} <br />
            Total Amount:Npr. {totalBill().withVAT + totalBill().service}{" "}
            {cartArr.length > 0 ? (
              <button onClick={cancelHandler}>
                {" "}
                <FaTimesCircle />
                Cancel Order
              </button>
            ) : null}
          </div>
          <footer>Keep Smiling </footer>
        </div>
      </div>
    </>
  );
};

export default DrinksMap;
