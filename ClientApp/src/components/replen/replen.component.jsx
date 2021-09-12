import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { getProducts, replen } from "../../data/getProducts";

const Replen = () => {
  const dispatch = useDispatch();
  const handleReplen = () => {
    dispatch(replen());
    dispatch(getProducts());
    alert("Replenished");
  };

  return (
    <div>
      <div style={{ marginTop: "40px" }}>
        You can click here and replenish the stock by 5
        <br />
        <br />
        <Button
          content="Replenish stock"
          color="black"
          onClick={handleReplen}
        />
      </div>
    </div>
  );
};

export default Replen;
