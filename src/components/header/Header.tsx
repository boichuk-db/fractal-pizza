import React, { FC } from "react";
import { Link } from "react-router-dom";

import logoSvg from "../../assets/img/pizza-logo.svg";
import { CartSVG } from '../../assets/SVG/SVG'
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Button from "../button/Button";
import styles from "./Header.module.scss";

const Header: FC = () => {
  const { totalPrice, totalCount } = useTypedSelector(({ cart }) => cart)
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Link to="/" >
          <div className={styles.logo}>
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>Fractal Pizza</h1>
              <p>the best pizza in our dimension</p>
            </div>
          </div>
        </Link>
        <Link to="/cart">
          <Button cart>
            <span>{totalPrice} ₴</span>
            <div className={styles.button__delimiter}></div>
            <CartSVG />
            <span>{totalCount}</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
