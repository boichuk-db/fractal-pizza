import React from "react";

import CategoryItem from "../categoryItem/CategoryItem";
import styles from "./Categories.module.scss";

interface CategoriesProps {
  categories: string[]
  activeCategory: number | null
  onClickCategory: (e: null | number) => void,
}
const Categories = React.memo(function Categories({ activeCategory, categories, onClickCategory }: CategoriesProps) {
  return (
    <div className={styles.root} >
      <ul>
        <li
          className={activeCategory === null ? `${styles.active}` : ""}
          onClick={() => onClickCategory(null)}
        >
          All
        </li>
        {categories &&
          categories.map((category, index) => (
            <CategoryItem
              key={category}
              index={index}
              activeCategory={activeCategory}
              onSelectCategory={onClickCategory}
              category={category}
            />
          ))}
      </ul>
    </div>
  );
})

export default Categories;
