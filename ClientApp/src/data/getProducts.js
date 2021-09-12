import { vendingActionTypes } from "../redux/vending/vendingActionTypes";

export const getProducts = () => async (dispatch) => {
  const response = await fetch("Products");

  const data = await response.json();
  dispatch({ type: vendingActionTypes.GET_PRODUCTS, payload: data });
};

export const SendMessage = (message) => async (dispatch) => {
  dispatch({ type: vendingActionTypes.SCREEN_MESSAGE, payload: message });
};

export const purchase = (product) => async (dispatch) => {
  try {
    fetch("Products/" + product.id, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(product),
    });

    dispatch({
      type: vendingActionTypes.PURCHASE_COMPLETE,
      payload: product.id,
    });
  } catch (error) {
    dispatch({
      type: vendingActionTypes.PURCHASE_ERROR,
      payload: error.message,
    });
  }
};

export const replen = () => async (dispatch) => {
  try {
    fetch("Products/", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },

      body: "",
    });
  } catch (error) {
    dispatch({
      type: vendingActionTypes.PURCHASE_ERROR,
      payload: error.message,
    });
  }
};
