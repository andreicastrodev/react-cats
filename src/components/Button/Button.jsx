import React from "react";
import styles from "./Button.module.css";

const Button = ({ name, handler }) => {
  return (
    <React.Fragment>
      <button onClick={handler} className={styles.button}>
        {name}
      </button>
    </React.Fragment>
  );
};

export default Button;
