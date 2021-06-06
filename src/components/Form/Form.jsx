import React from "react";
import styles from "./Form.module.css";
const Form = () => {
  return (
    <React.Fragment>
      <form className={styles.form}>
        <div className={styles.formBlock}>
          <label className={styles.formLabel}>Name</label>
          <input type="text" placeholder="Name" className={styles.formInput} />
        </div>
        <div className={styles.formBlock}>
          <label className={styles.formLabel}>Age</label>
          <input type="number" placeholder="Age" className={styles.formInput} />
        </div>
        <div className={styles.formBlock}>
          <label className={styles.formLabel}>Breed</label>
          <input type="text" placeholder="Breed" className={styles.formInput} />
        </div>
        <input type="file" className={styles.formFile} />
      </form>
    </React.Fragment>
  );
};

export default Form;
