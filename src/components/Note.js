import React from "react";

import styles from "./Note.module.css";

const Note = (props) => {
  const corner = props.right ? styles.noteRight : styles.noteLeft;
  const classes = `${styles.note} ${corner}`;
  return <div className={classes}>{props.children}</div>;
};

export default Note;
