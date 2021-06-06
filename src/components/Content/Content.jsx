import React from "react";
import ContentCard from "./Content-card";
import styles from "./Content.module.css";
const Content = ({ cats }) => {
  console.log(cats);
  return (
    <React.Fragment>
      <div className={styles.content}>
        {cats.map((cat, i) => {
          return (
            <ContentCard
              name={cat.name}
              age={cat.age}
              breed={cat.breed}
              key={i}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Content;
