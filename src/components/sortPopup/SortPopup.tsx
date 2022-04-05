import React, { useEffect, useRef, useState } from "react";

import { ISort } from "../../types/filters";
import styles from "./SortPopup.module.scss";

interface SortPopupProps {
  sorts: ISort[];
  activeSortType: string
  onSelectSortType: (e: ISort) => void
}

const SortPopup = React.memo(function SortPopup({ sorts = [], activeSortType, onSelectSortType }: SortPopupProps) {

  const [isVisiblePopup, setIsVisiblePopup] = useState(false);

  const sortRef = useRef<HTMLDivElement>(null);
  const activeLabel = sorts.find(sort => sort.type === activeSortType)?.name

  const toggleVisiblePopup = () => {
    setIsVisiblePopup(!isVisiblePopup);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
      setIsVisiblePopup(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  const onSelectedSort = (sort: ISort) => {
    onSelectSortType(sort);
    setIsVisiblePopup(false);
  };

  return (
    <div className={styles.root} ref={sortRef}>
      <div className={styles.label}>
        <svg
          className={!isVisiblePopup ? styles.icon : ""}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {isVisiblePopup && (
        <div className={styles.popup}>
          <ul>
            {sorts.map((sort: ISort) => (
              <li
                className={activeSortType === sort.type ? styles.active : ""}
                key={sort.id}
                onClick={() => onSelectedSort(sort)}
              >
                {sort.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
})

export default SortPopup;
