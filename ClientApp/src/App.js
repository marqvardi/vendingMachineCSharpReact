import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "./custom.css";
import { Container } from "semantic-ui-react";
import MainDisplay from "./components/MainDisplay/mainDisplay.component";
import "./App.css";
import Coins from "./components/coins/coins.component";
import InsertCoinsDisplay from "./components/insertCoinsDisplay/insertCoinsDisplay.component";
import { useDispatch, useSelector } from "react-redux";
import { vendingActionTypes } from "./redux/vending/vendingActionTypes";
import { getProducts, purchase, SendMessage } from "./data/getProducts";
import Replen from "./components/replen/replen.component";

const App = () => {
  const products = useSelector((state) => state.vending.products);
  const coinsInserted = useSelector((state) => state.vending.coinsInserted);
  const dispatch = useDispatch();

  const [message, setMessage] = useState(null);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleSelection = (product) => {
    if (coinsInserted < product.price) {
      dispatch(SendMessage("Add more coins"));
    } else {
      setMessage("");
      dispatch({ type: vendingActionTypes.LOADING });
      const changeGiven = coinsInserted - product.price;

      setTimeout(() => {
        dispatch(purchase(product));

        if (changeGiven <= 0) {
          dispatch(SendMessage("Product dispensed, Thank you"));
          setTimeout(() => {
            dispatch(SendMessage(""));
          }, 3000);
        } else {
          dispatch(
            SendMessage(
              `Product dispensed, thank you, change of £ ${changeGiven.toFixed(
                2
              )}`
            )
          );
          setTimeout(() => {
            dispatch(SendMessage(""));
          }, 3000);
        }
      }, 2000);
    }
  };

  const handleRejectedCoins = () => {
    dispatch(SendMessage("Sorry, cant accept 1P or 2P coins"));
  };

  return (
    <Container>
      <div className="main">
        <h2 style={{ textAlign: "center" }}>Vending machine</h2>
        <div className="mainDisplay">
          <MainDisplay products={products} handleSelection={handleSelection} />
          <InsertCoinsDisplay message={message} />
        </div>
        <Coins handleRejectedCoins={handleRejectedCoins} />
      </div>
      <Replen />
    </Container>
  );
};
export default App;
