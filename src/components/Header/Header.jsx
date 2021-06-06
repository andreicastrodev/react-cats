import React from "react";
import styles from "./Header.module.css";
import Form from "../Form/Form";
import Button from "../Button/Button";
const Header = ({ onAddData, onUpdateData }) => {
  return (
    <React.Fragment>
      <div className={styles.header}>
        <div className={styles.headerTitle}>Cat Society</div>
        <h2 className={styles.headerSubTitle}>Upload your cat!</h2>
        <Form onAddHandler={onAddData} />
        <Button handler={onUpdateData} name={"Update"} />
      </div>
    </React.Fragment>
  );
};

export default Header;
