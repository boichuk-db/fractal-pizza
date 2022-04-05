import React from 'react'
import { Link } from 'react-router-dom'

import imgCartEmpty from "../../assets/img/empty-cart.png";
import { ComeBackArrowSVG } from '../../assets/SVG/SVG'
import Button from '../../components/button/Button';
import styles from "./Cart.module.scss";

const CartEmpty = () => {
  return (
    <div className={`${styles.cart} ${styles.cart__empty}`}>
      <h2>Cart is empty</h2>
      <p>
        You probably haven&apos;t ordered pizza yet.
        <br />
        To order pizza, go to the main page.
      </p>
      <img src={imgCartEmpty} alt="Empty cart" />
      <Link to="/">
        <Button outline add back>
          <ComeBackArrowSVG />
          <span>Back to main</span>
        </Button>
      </Link>
    </div >
  )
}

export default CartEmpty