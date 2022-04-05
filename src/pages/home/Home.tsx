import React, { FC, useCallback, useEffect } from "react";

import Categories from "../../components/categories/Categories";
import PizzasList from "../../components/pizzasList/PizzasList";
import SortPopup from "../../components/sortPopup/SortPopup";
import categories from "../../constants/categories";
import sorts from "../../constants/sorts";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { PizzaToCartType } from "../../types/cart";
import styles from "./Home.module.scss";

const Home: FC = () => {
  const { fetchPizzas, setCategory, setSortBy, addItemToCart } = useActions()
  const { items, isLoaded } = useTypedSelector(({ pizzas }) => pizzas)
  const { category, sortBy, } = useTypedSelector(({ filters }) => filters)
  const activeTitle = categories[category] === undefined ? "All" : categories[category]


  useEffect(() => {
    fetchPizzas(category, sortBy)
  }, [category, sortBy]);


  const onSelectCategory = useCallback((index: null | number) => {
    setCategory(index)
  }, [])

  const onSelectSortType = useCallback((type) => {
    setSortBy(type)
  }, [])

  const addPizzaToCart = (objPizza: PizzaToCartType) => {
    addItemToCart(objPizza);
  }

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.content__top}>
          <Categories categories={categories} activeCategory={category} onClickCategory={onSelectCategory} />
          <SortPopup sorts={sorts} activeSortType={sortBy.type} onSelectSortType={onSelectSortType} />
        </div>
        <h2 className={styles.content__title}>{isLoaded ? `${activeTitle} pizzas` : 'Loading...'}</h2>
        <PizzasList pizzas={items}
          isLoaded={isLoaded}
          onClickAddPizza={addPizzaToCart} />
      </div>
    </div>
  );
};

export default Home;
