import axios from "axios";
import { Dispatch } from "react";

import { PizzasAction, PizzasActionsTypes } from "../../types/pizzas";

export const fetchPizzas = (
  category: number | null,
  sortBy: { type: string; order: string }
) => {
  return async (dispatch: Dispatch<PizzasAction>) => {
    try {
      dispatch({ type: PizzasActionsTypes.FETCH_PIZZAS });
      const response = await axios.get(
        `/pizzas?${category === null ? "" : `category=${category}`}&_sort=${
          sortBy.type
        }&_order=${sortBy.order}`
      );
      dispatch({
        type: PizzasActionsTypes.FETCH_PIZZAS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: PizzasActionsTypes.FETCH_PIZZAS_ERROR,
        payload: "Sorry for the inconvenience",
      });
    }
  };
};
