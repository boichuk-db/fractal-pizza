import classNames from "classnames";
import React, { FC } from "react";

import { ButtonProps } from "../../types/button";
import styles from "./Button.module.scss";

const Button: FC<ButtonProps> = ({
  outline,
  add,
  filled,
  cart,
  circle,
  remove,
  back,
  pay,
  disabled,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, {
        [styles.button__outline]: outline,
        [styles.button__add]: add,
        [styles.button__filled]: filled,
        [styles.button__cart]: cart,
        [styles.button__circle]: circle,
        [styles.button__remove]: remove,
        [styles.button__back]: back,
        [styles.button__pay]: pay,
        [styles.button__disabled]: disabled,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
