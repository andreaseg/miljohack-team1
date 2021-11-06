
import React from 'react';

class HeatingInfo extends React.Component {


  render() {
    const improvements = this.props.improvements;

    if (improvements) {
      console.log("heating");

      return (
          <div>
            <h3>Oppvarming</h3>
          </div>
      )
    } else {
      return (null)
    }
  }
}

export default HeatingInfo;