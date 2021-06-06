import React from "react";
import styles from "./Header.module.css";
import Form from "../Form/Form";
const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.header}>
        <div className={styles.headerTitle}>Cat Society</div>
        <h2 className={styles.headerSubTitle}>Upload your cat!</h2>
        <Form />
      </div>
    </React.Fragment>
  );
};

export default Header;
