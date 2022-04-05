import { FiltersActionsTypes } from "../../types/filters";

export const setCategory = (categoryIndex: null | number) => {
  return { type: FiltersActionsTypes.SET_CATEGORY, payload: categoryIndex };
};

export const setSortBy = ({ type, order }: { type: string; order: string }) => {
  return { type: FiltersActionsTypes.SET_SORT_BY, payload: { type, order } };
};
