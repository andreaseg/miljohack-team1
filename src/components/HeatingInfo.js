import React from 'react';

class HeatingInfo extends React.Component {


  render() {
    const heating = this.props.heating;

    if (heating) {
      console.log("heating");
      console.log(heating);

      const expense = parseInt(heating.expense);
      const pollution = parseInt(heating.pollution);
      const energy = parseInt(heating.energy);

      return (
          <div>
            <h3>Oppvarming</h3>
              Du bruker {energy}kWh<br /> 
              Det koster deg {expense}kr!<br />
              Ditt miljøavtrykk er {pollution}CO2-ekvivalenter
          </div>
      )
    } else {
      return (null)
    }
  }
}

export default HeatingInfo;