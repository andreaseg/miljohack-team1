
import React from 'react';

class Row extends React.Component {


  render() {
    const text = this.props.text;
    const value = this.props.value;

      return (
          <div>
            <div className="row">
                <div className="column bold">
                {text}
                </div>
                <div className="column">
                {value}
                </div>
            </div>
          </div>
      );
    }
}

export default Row;