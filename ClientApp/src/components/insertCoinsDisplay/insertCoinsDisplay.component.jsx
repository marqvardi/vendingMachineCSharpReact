import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Label } from "semantic-ui-react";
import { SendMessage } from "../../data/getProducts";
import { vendingActionTypes } from "../../redux/vending/vendingActionTypes";
import "./insertCoinsDisplay.style.css";

const InsertCoinsDisplay = () => {
  const coinsInserted = useSelector((state) => state.vending.coinsInserted);

  const screenMessage = useSelector((state) => state.vending.screenMessage);

  const loading = useSelector((state) => state.vending.loading);
  const dispatch = useDispatch();

  const handleReturnMoney = () => {
    dispatch({ type: vendingActionTypes.RETURN_MONEY });
    dispatch(SendMessage(`Money returned: £ ${coinsInserted.toFixed(2)}`));

    setTimeout(() => {
      dispatch(SendMessage(""));
    }, 3000);
  };

  return (
    <div
      style={{
        marginTop: "20px",
        borderRadius: "20px",
        border: "solid",
        padding: "10px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Display screen </h1>
      {coinsInserted.toFixed(2) <= 0 ? (
        <Label content="INSERT COINS - £ 0 " color="green" size="large" />
      ) : (
        <Button
          content={`Inserted £ ${coinsInserted.toFixed(2)}`}
          color="purple"
          loading={loading}
        />
      )}

      <br />
      <br />
      <br />
      <div style={{ marginTop: "20px" }}>
        {coinsInserted > 0.01 && (
          <Button
            content="Return coins"
            color="teal"
            onClick={handleReturnMoney}
          />
        )}
        <div className="insertCoins">
          {screenMessage ? <Label content={screenMessage} color="pink" /> : ""}
        </div>
      </div>
    </div>
  );
};

export default InsertCoinsDisplay;
