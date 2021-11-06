import React from 'react';

class SB1Button extends React.Component {
  render() {

    return (
        <>
          <button onClick={this.props.onClick}>
              {this.props.text}
            </button>
        </>
    )
  }
}

export default SB1Button;