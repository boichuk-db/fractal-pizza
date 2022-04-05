import React, { FC } from "react";
import { Link } from "react-router-dom";

import {
  CartSVG,
  ComeBackArrowSVG,
  DeleteBasketSVG,
} from "../../assets/SVG/SVG";
import Button from "../../components/button/Button";
import PizzaCartItem from "../../components/pizzaCartItem/PizzaCartItem";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from "./Cart.module.scss";
import CartEmpty from "./CartEmpty";

const Cart: FC = () => {
  const { clearCart, removeGroupFromCart, plusPizza, minusPizza } =
    useActions();
  const { pizzasCart, totalCount, totalPrice } = useTypedSelector(
    ({ cart }) => cart
  );

  const groupPizzas = Object.keys(pizzasCart).map((key) => {
    return pizzasCart[Number(key)].items[0];
  });

  const onClearCart = () => {
    if (window.confirm("Are you sure you want to clear cart?")) {
      clearCart();
    }
  };
  const onRemoveGroupFromCart = (id: number, title: string) => {
    if (window.confirm(`Are you sure you want to delete ${title}?`)) {
      removeGroupFromCart(id);
    }
  };
  const onClickPlusPizza = (id: number) => {
    plusPizza(id);
  };
  const onClickMinusPizza = (id: number) => {
    minusPizza(id);
  };

  return (
    <div className={styles.content}>
      <div className={`${styles.container} ${styles.container__cart}`}>
        {totalCount ? (
          <div className={styles.cart}>
            <div className={styles.cart__top}>
              <h2 className={styles.content__title}>
                <CartSVG />
                Cart
              </h2>
              <div className={styles.clear} onClick={onClearCart}>
                <DeleteBasketSVG />
                <span>Clear cart</span>
              </div>
            </div>
            <div className={styles.content__items}>
              {groupPizzas.map((obj) => (
                <PizzaCartItem
                  key={obj.id}
                  id={obj.id}
                  imageUrl={obj.imageUrl}
                  title={obj.title}
                  type={obj.type}
                  size={obj.size}
                  totalPrice={pizzasCart[obj.id].totalPrice}
                  totalCount={pizzasCart[obj.id].items.length}
                  onRemoveGroupFromCart={onRemoveGroupFromCart}
                  onClickPlusPizza={onClickPlusPizza}
                  onClickMinusPizza={onClickMinusPizza}
                />
              ))}
            </div>
            <div className={styles.cart__bottom}>
              <div className={styles.cart__bottom__details}>
                <span>
                  Total pizzas: <b>{totalCount}</b>
                </span>
                <span>
                  Order price: <b>{totalPrice} ₴</b>
                </span>
              </div>
              <div className={styles.cart__bottom__buttons}>
                <Link to="/">
                  <Button outline add back>
                    <ComeBackArrowSVG />
                    <span>Back to main</span>
                  </Button>
                </Link>
                <Button pay>
                  <span>Pay now</span>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
};

export default Cart;
