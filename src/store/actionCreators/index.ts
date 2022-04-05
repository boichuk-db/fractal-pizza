import * as cartActionCreator from "./cart";
import * as filtersActionCreator from "./filters";
import * as pizzasActionCreator from "./pizzas";

const actionCreators = {
  ...filtersActionCreator,
  ...pizzasActionCreator,
  ...cartActionCreator,
};

export default actionCreators;
