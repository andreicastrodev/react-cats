import React, { useRef } from "react";
import styles from "./Form.module.css";
import Button from "../Button/Button";
const Form = ({ onAddHandler }) => {
  const nameRef = useRef("");
  const ageRef = useRef(null);
  const breedRef = useRef("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const catData = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      breed: breedRef.current.value,
    };

    onAddHandler(catData);
  };

  return (
    <React.Fragment>
      <form className={styles.form}>
        <div className={styles.formBlock}>
          <label className={styles.formLabel}>Name</label>
          <input
            type="text"
            placeholder="Name"
            className={styles.formInput}
            ref={nameRef}
          />
        </div>
        <div className={styles.formBlock}>
          <label className={styles.formLabel}>Age</label>
          <input
            type="number"
            placeholder="Age"
            className={styles.formInput}
            ref={ageRef}
          />
        </div>
        <div className={styles.formBlock}>
          <label className={styles.formLabel}>Breed</label>
          <input
            type="text"
            placeholder="Breed"
            className={styles.formInput}
            ref={breedRef}
          />
        </div>
        <input type="file" className={styles.formFile} />
        <Button name={"Submit"} handler={onSubmitHandler} />
      </form>
    </React.Fragment>
  );
};

export default Form;
