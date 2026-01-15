import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <>
      <article className={styles.cards}>
        <div>{props.title}</div>

        <input type="button" value="+ Adicionar meta" className={styles.card} />
      </article>
    </>
  );
};

export default Card;
