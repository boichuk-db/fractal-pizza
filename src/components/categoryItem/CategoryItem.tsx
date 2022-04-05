import React, { FC } from "react";

import styles from "./CategoryItem.module.scss";

interface CategoryItemProps {
  index: number;
  category: string;
  activeCategory: number | null;
  onSelectCategory: (e: number) => void;
}

const CategoryItem: FC<CategoryItemProps> = ({
  index,
  category,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <li
      onClick={() => onSelectCategory(index)}
      className={activeCategory === index ? styles.root__active : ""}
    >
      {category}
    </li>
  );
};

export default CategoryItem;
