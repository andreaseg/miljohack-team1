import React from 'react';

class InputField extends React.Component {
  render() {
    const id = "id-" + Math.random.toString()
    const value = this.props.value;
    const setValue = this.props.setValue
    const text = this.props.text

    return (
        <div className="row">
        <label className="column" htmlFor={id}>{text}</label>
        <input className="column" type="text" id={id} value={value} onChange={e => setValue(e.target.value)} />
        </div>
    )
  }
}

export default InputField;