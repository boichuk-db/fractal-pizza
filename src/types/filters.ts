export interface ISort {
  id: number;
  name: string;
  type: string;
}

export enum FiltersActionsTypes {
  SET_SORT_BY = "SET_SORT_BY",
  SET_CATEGORY = "SET_CATEGORY",
}

