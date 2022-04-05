import React, { FC } from 'react'

import { CountMinusSVG, CountPlusSVG, RemoveItemSVG } from '../../assets/SVG/SVG'
import Button from '../button/Button'
import styles from './PizzaCartItem.module.scss'

interface CartItemProps {
  id: number
  title: string;
  imageUrl: string;
  type: string;
  size: number;
  totalPrice: number;
  totalCount: number;
  onRemoveGroupFromCart: (id: number, title: string) => void;
  onClickPlusPizza: (id: number) => void;
  onClickMinusPizza: (id: number) => void;
}
const PizzaCartItem: FC<CartItemProps> = ({ id, title, imageUrl, type, size, totalPrice, totalCount, onRemoveGroupFromCart, onClickPlusPizza, onClickMinusPizza }) => {
  const handleRemovePizza = () => {
    onRemoveGroupFromCart(id, title)
  }

  const handlePlusPizza = () => {
    onClickPlusPizza(id)
  }

  const handleMinusPizza = () => {
    onClickMinusPizza(id)
  }

  return (
    <div className={styles.cart__item}>
      <div className={styles.cart__item__img}>
        <img
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className={styles.cart__item__info}>
        <h3>{title}</h3>
        <p>{type} dough, {size} sm</p>
      </div>
      <div className={styles.cart__item__count}>
        <Button outline circle onClick={handleMinusPizza} disabled={totalCount <= 1}>
          <CountMinusSVG />
        </Button>
        <b>{totalCount}</b>
        <Button outline circle onClick={handlePlusPizza}>
          <CountPlusSVG />
        </Button>
      </div>
      <div className={styles.cart__item__price}>
        <b>{totalPrice} ₴</b>
      </div>
      <div className={styles.cart__item__remove}>
        <Button outline circle remove onClick={handleRemovePizza}>
          <RemoveItemSVG />
        </Button>
      </div>
    </div>
  )
}

export default PizzaCartItem