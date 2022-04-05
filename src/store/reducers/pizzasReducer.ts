import {
  PizzasAction,
  PizzasActionsTypes,
  PizzasState,
} from "../../types/pizzas";

const initialState: PizzasState = {
  items: [],
  isLoaded: false,
  error: null,
};

const pizzasReducer = (
  state = initialState,
  action: PizzasAction
): PizzasState => {
  switch (action.type) {
    case PizzasActionsTypes.FETCH_PIZZAS:
      return {
        isLoaded: false,
        error: null,
        items: [],
      };
    case PizzasActionsTypes.FETCH_PIZZAS_SUCCESS:
      return {
        isLoaded: true,
        error: null,
        items: action.payload,
      };
    case PizzasActionsTypes.FETCH_PIZZAS_ERROR:
      return {
        isLoaded: true,
        error: action.payload,
        items: [],
      };
    default:
      return state;
  }
};

export default pizzasReducer;
