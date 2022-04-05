import { AnyAction } from "redux";

import { FiltersActionsTypes } from "../../types/filters";

interface FiltersState {
  category: number | null;
  sortBy: {
    type: string;
    order: string;
  };
}

const initialState: FiltersState = {
  category: null,
  sortBy: { type: "rating", order: "desc" },
};

const filtersReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FiltersActionsTypes.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case FiltersActionsTypes.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};

export default filtersReducer;
