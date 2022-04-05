import { CartActionsTypes, PizzaToCartType } from "../../types/cart";

export const addItemToCart = (objPizza: PizzaToCartType) =>
  ({
    type: CartActionsTypes.ADD_TO_CART,
    payload: { ...objPizza },
  } as const);

export const removeGroupFromCart = (pizzaID: number) =>
  ({
    type: CartActionsTypes.REMOVE_GROUP_PIZZAS,
    payload: pizzaID,
  } as const);

export const clearCart = () =>
  ({
    type: CartActionsTypes.CLEAR_ITEMS,
  } as const);

export const plusPizza = (pizzaID: number) =>
  ({
    type: CartActionsTypes.PLUS_ITEM,
    payload: pizzaID,
  } as const);

export const minusPizza = (pizzaID: number) =>
  ({
    type: CartActionsTypes.MINUS_ITEM,
    payload: pizzaID,
  } as const);

export type CartActions =
  | ReturnType<typeof addItemToCart>
  | ReturnType<typeof removeGroupFromCart>
  | ReturnType<typeof clearCart>
  | ReturnType<typeof plusPizza>
  | ReturnType<typeof minusPizza>;
