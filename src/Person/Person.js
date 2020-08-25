import React from "react";

import styles from "./Person.module.css";

const person = (props) => {
  if (Math.random() > 0.7) {
    throw new Error("Something went wrong.")
  }

  return (
    <div className={styles.Person}>
      <p onClick={props.click}>
        Hello, my name is {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
