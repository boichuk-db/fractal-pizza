import classNames from "classnames";
import React, { FC, useState } from "react";

import { CountPlusSVG } from '../../assets/SVG/SVG'
import { PizzaToCartType } from "../../types/cart";
import Button from "../button/Button";
import styles from "./PizzaItem.module.scss";

interface PizzaItemProps {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  cartItemsCount: number;
  onClickAddPizza: (objPizza: PizzaToCartType) => void
}

const PizzaItem: FC<PizzaItemProps> = ({ id, title, imageUrl, price, types, sizes, cartItemsCount, onClickAddPizza }) => {
  const availableTypes = ["thin", "traditional"];
  const availableSizes = [26, 30, 40];

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);


  const onSelectType = (index: number) => {
    setActiveType(index);
  };

  const onSelectSize = (index: number) => {
    setActiveSize(index);
  };

  const onAddPizza = () => {
    const objPizza: PizzaToCartType = {
      id,
      title,
      imageUrl,
      price,
      size: availableSizes[activeSize],
      type: availableTypes[activeType],
    }
    onClickAddPizza(objPizza)
  }

  return (
    <div className={styles.root}>
      <img className={styles.image} src={imageUrl} alt="Pizza" />
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.selector}>
        <ul>
          {availableTypes.map((type, index) => (
            <li
              key={type}
              className={classNames({
                [styles.active]: activeType === index,
                [styles.disabled]: !types.includes(index),
              })}
              onClick={() => onSelectType(index)}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={index}
              className={classNames({
                [styles.active]: activeSize === index,
                [styles.disabled]: !sizes.includes(size),
              })}
              onClick={() => onSelectSize(index)}
            >
              {size} sm
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bottom}>
        <div className={styles.price}>{price} ₴</div>
        <Button outline add onClick={onAddPizza}>
          <CountPlusSVG />
          <span>Add to cart</span>
          {cartItemsCount ? <i>{cartItemsCount}</i> : ''}
        </Button>
      </div>
    </div>
  );
};

export default PizzaItem;
