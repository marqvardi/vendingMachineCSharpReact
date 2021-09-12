import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";

import { vendingActionTypes } from "../../redux/vending/vendingActionTypes";
import { MockDataCoins } from "../mockData/mockData";
import "./coins.style.css";

const Coins = ({ handleRejectedCoins }) => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.vending.coins);

  useEffect(() => {
    dispatch({
      type: vendingActionTypes.GET_COINS_LIST,
      payload: MockDataCoins,
    });
  });

  const handleMoneyInserted = (coin) => {
    if (coin.value <= 0.02) {
      handleRejectedCoins();
      // alert("not accepted");
      return;
    }

    dispatch({ type: vendingActionTypes.INSERT_COIN, payload: coin.value });
  };

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Customer coins</h3>
      <div className="coins">
        <br />
        {coins &&
          coins.map((coin) => (
            <Button
              key={coin.id}
              content={coin.name}
              color={coin.color}
              onClick={() => handleMoneyInserted(coin)}
            />
          ))}
      </div>
    </>
  );
};

export default Coins;
