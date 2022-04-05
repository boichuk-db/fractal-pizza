import React from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { PizzaToCartType } from "../../types/cart";
import { IPizza } from "../../types/pizzas";
import PizzaItem from "../pizzaItem/PizzaItem";
import PizzaLoader from "../pizzaItem/PizzaLoader";
import styles from "./PizzasList.module.scss";

interface PizzasListProps {
  pizzas: IPizza[];
  isLoaded: boolean;
  onClickAddPizza: (objPizza: PizzaToCartType) => void;
}

const PizzasList = React.memo(function PizzasList({
  pizzas,
  isLoaded,
  onClickAddPizza,
}: PizzasListProps) {
  const { pizzasCart } = useTypedSelector(({ cart }) => cart);

  console.log(isLoaded);
  console.log(pizzas);

  return (
    <div className={styles.root}>
      {isLoaded
        ? pizzas.map((pizza) => (
            <PizzaItem
              key={pizza.id}
              {...pizza}
              cartItemsCount={
                pizzasCart[pizza.id] ? pizzasCart[pizza.id].items.length : 0
              }
              onClickAddPizza={(objPizza) => onClickAddPizza(objPizza)}
            />
          ))
        : Array(12)
            .fill(0)
            .map((_, index) => <PizzaLoader key={index} />)}
    </div>
  );
});

export default PizzasList;
