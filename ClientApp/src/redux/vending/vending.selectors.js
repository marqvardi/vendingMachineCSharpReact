import { createSelector } from "reselect";

const vending = (state) => state.vending;

export const getCoinsInserted = createSelector(
  vending,
  (vending) => vending.coinsInserted
);

export const getLoading = createSelector(vending, (vending) => vending.loading);

export const getScreenMessage = createSelector(
  [vending],
  (vending) => vending.screenMessage
);
