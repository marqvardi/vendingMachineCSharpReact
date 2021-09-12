import { vendingActionTypes } from "./vendingActionTypes";

const INITIAL_VALUE = {
  products: [],
  coinsInserted: 0,
  coins: [],
  loading: false,
  changeGiven: 0,
  screenMessage: null,
};

const vendingReducer = (state = INITIAL_VALUE, { type, payload }) => {
  switch (type) {
    case vendingActionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case vendingActionTypes.GET_COINS_LIST:
      return {
        ...state,
        coins: payload,
      };
    case vendingActionTypes.INSERT_COIN:
      return {
        ...state,
        coinsInserted: state.coinsInserted + payload,
        screenMessage: null,
      };
    case vendingActionTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case vendingActionTypes.PURCHASE_COMPLETE:
      return {
        ...state,
        loading: false,
        coinsInserted: 0,
        products: removeItem(state.products, payload),
      };
    case vendingActionTypes.RETURN_MONEY:
      return {
        ...state,
        coinsInserted: 0,
      };

    case vendingActionTypes.SCREEN_MESSAGE:
      return {
        ...state,
        screenMessage: payload,
      };

    default:
      return state;
  }
};

export default vendingReducer;

const removeItem = (products, id) => {
  return products.map((product) =>
    product.id === id ? { ...product, quantity: product.quantity - 1 } : product
  );
};
