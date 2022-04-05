export type PizzaToCartType = {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  size: number;
  type: string;
};

export type ItemsCartType = {
  [key: number]: {
    items: PizzaToCartType[];
    totalPrice: number;
  };
};

export enum CartActionsTypes {
  ADD_TO_CART = "ADD_TO_CART",
  PLUS_ITEM = "PLUS_ITEM",
  MINUS_ITEM = "MINUS_ITEM",
  REMOVE_GROUP_PIZZAS = "REMOVE_GROUP_PIZZAS",
  CLEAR_ITEMS = "CLEAR_ITEMS",
  ITEMS_COUNT = "ITEMS_COUNT",
}
