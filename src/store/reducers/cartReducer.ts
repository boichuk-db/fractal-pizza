import { CartActions } from "../actionCreators/cart";
import {
  CartActionsTypes,
  ItemsCartType,
  PizzaToCartType,
} from "./../../types/cart";

const initialState = {
  pizzasCart: {} as ItemsCartType,
  totalPrice: 0,
  totalCount: 0,
};

type InitialStateType = typeof initialState;
let currentPizzaItems;
let newItems;
let pizzas;

const getTotalPrice = (arr: PizzaToCartType[]) =>
  arr.reduce((sum, obj) => obj.price + sum, 0);

const cartReducer = (
  state: InitialStateType = initialState,
  action: CartActions
): InitialStateType => {
  switch (action.type) {
    case CartActionsTypes.ADD_TO_CART:
      currentPizzaItems = !state.pizzasCart[action.payload.id]
        ? [action.payload]
        : [...state.pizzasCart[action.payload.id].items, action.payload];
      newItems = {
        ...state.pizzasCart,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };
      return {
        ...state,
        pizzasCart: newItems,
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    case CartActionsTypes.REMOVE_GROUP_PIZZAS:
      pizzas = { ...state.pizzasCart };
      delete pizzas[action.payload];
      return {
        ...state,
        pizzasCart: pizzas,
        totalCount:
          state.totalCount - state.pizzasCart[action.payload].items.length,
        totalPrice:
          state.totalPrice - state.pizzasCart[action.payload].totalPrice,
      };
    case CartActionsTypes.CLEAR_ITEMS:
      return {
        pizzasCart: {},
        totalPrice: 0,
        totalCount: 0,
      };
    case CartActionsTypes.PLUS_ITEM:
      return {
        ...state,
        pizzasCart: {
          ...state.pizzasCart,
          [action.payload]: {
            items: [
              ...state.pizzasCart[action.payload].items,
              state.pizzasCart[action.payload].items[0],
            ],
            totalPrice:
              state.pizzasCart[action.payload].totalPrice +
              state.pizzasCart[action.payload].items[0].price,
          },
        },
        totalCount: state.totalCount + 1,
        totalPrice:
          state.totalPrice + state.pizzasCart[action.payload].items[0].price,
      };
    case CartActionsTypes.MINUS_ITEM:
      return {
        ...state,
        pizzasCart: {
          ...state.pizzasCart,
          [action.payload]: {
            items:
              state.pizzasCart[action.payload].items.length >= 1
                ? [...state.pizzasCart[action.payload].items.slice(1)]
                : state.pizzasCart[action.payload].items,
            totalPrice:
              state.pizzasCart[action.payload].totalPrice -
              state.pizzasCart[action.payload].items[0].price,
          },
        },
        totalCount: state.totalCount - 1,
        totalPrice:
          state.totalPrice - state.pizzasCart[action.payload].items[0].price,
      };
    default:
      return state;
  }
};

export default cartReducer;
