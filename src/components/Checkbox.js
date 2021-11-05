import React, { useState } from "react";
import getKey from "../utils/GetKey";

import styles from "./Checkbox.module.css";

const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [id, setId] = useState("checkbox_" + getKey());

  const onChangeHandle = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    props.onCheck(checked);
  };

  return (
    <div className={styles.top}>
      {props.children && <div className={styles.label}>{props.children}</div>}
      <div className={styles.container}>
        <div className={styles.circle}>
          <input
            checked={isChecked}
            type="checkbox"
            onChange={onChangeHandle}
            id={id}
          />
          <label for={id}></label>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
