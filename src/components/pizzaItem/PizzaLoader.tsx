import React from "react"
import ContentLoader from "react-content-loader"

import styles from "./PizzaItem.module.scss";


const PizzaLoader = () => {
  return (
    <ContentLoader
      className={styles.root}
      speed={2}
      width={280}
      height={500}
      viewBox="0 0 280 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="120" r="120" />
      <rect x="0" y="270" rx="6" ry="6" width="280" height="25" />
      <rect x="0" y="310" rx="6" ry="6" width="280" height="88" />
      <rect x="0" y="425" rx="6" ry="6" width="100" height="30" />
      <rect x="150" y="425" rx="15" ry="15" width="130" height="30" />
    </ContentLoader>
  )
}

export default PizzaLoader