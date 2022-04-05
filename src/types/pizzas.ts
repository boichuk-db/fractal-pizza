export interface IPizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export interface PizzasState {
  items: IPizza[];
  isLoaded: boolean;
  error: null | string;
}

export enum PizzasActionsTypes {
  FETCH_PIZZAS = "FETCH_PIZZAS",
  FETCH_PIZZAS_SUCCESS = "FETCH_PIZZAS_SUCCESS",
  FETCH_PIZZAS_ERROR = "FETCH_PIZZAS_ERROR",
}

interface FetchPizzasAction {
  type: PizzasActionsTypes.FETCH_PIZZAS;
}
interface FetchPizzasSuccesAction {
  type: PizzasActionsTypes.FETCH_PIZZAS_SUCCESS;
  payload: IPizza[];
}
interface FetchPizzasErrorAction {
  type: PizzasActionsTypes.FETCH_PIZZAS_ERROR;
  payload: string;
}

export type PizzasAction =
  | FetchPizzasAction
  | FetchPizzasSuccesAction
  | FetchPizzasErrorAction;

