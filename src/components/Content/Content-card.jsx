import React from "react";
import styles from "./Content-card.module.css";
const ContentCard = ({ name, age, breed }) => {
  return (
    <div className={styles.contentCard}>
      <div className={styles.contentCardName}>
        <p className={styles.contentCardText}>Name: </p>
        <span className={styles.contentCardSpan}>{name}</span>
      </div>
      <div className={styles.contentCardAge}>
        <p className={styles.contentCardText}>Age</p>
        <span className={styles.contentCardSpan}>{age}</span>
      </div>
      <div className={styles.contentCardBreed}>
        <p className={styles.contentCardText}>Breed</p>
        <span className={styles.contentCardSpan}>{breed}</span>
      </div>
    </div>
  );
};

export default ContentCard;
