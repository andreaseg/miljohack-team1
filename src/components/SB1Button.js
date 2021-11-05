import React from 'react';

class SB1Button extends React.Component {
  render() {

    return (
        <>
          <div className="sb1-button" onClick={this.props.onClick}>
              {this.props.text}
            </div>
        </>
    )
  }
}

export default SB1Button;