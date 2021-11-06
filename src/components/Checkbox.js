import React, { useState } from "react";
import getKey from "../utils/GetKey";

import styles from "./Checkbox.module.css";

const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(props.checked || false);
  const [id, setId] = useState("checkbox_" + getKey());

  const onChangeHandle = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    props.onCheck(checked);
  };

  const onKeyPressHandle = (event) => {
    console.log(event.keyCode);
    const isEnterOrSpace = event.keyCode === 32 || event.keyCode === 13 || event.keyCode === 0;
    if (isEnterOrSpace) {
      event.preventDefault();
      setIsChecked(prev => !prev);
    }
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
          <label htmlFor={id} tabIndex="0" onKeyPress={onKeyPressHandle}></label>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
