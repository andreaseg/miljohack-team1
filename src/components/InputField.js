import React from "react";

import styles from "./InputField.module.css";

class InputField extends React.Component {
  render() {
    const id = "id-" + Math.random();
    const value = this.props.value;
    const setValue = this.props.setValue;
    const text = this.props.children

    return (
      <div className={styles.container}>
        <label htmlFor={id}>{text}</label>
        <input
          type="text"
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  }
}

export default InputField;
