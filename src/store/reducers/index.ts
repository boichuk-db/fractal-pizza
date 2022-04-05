import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import filtersReducer from "./filtersReducer";
import pizzasReducer from "./pizzasReducer";

export const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
