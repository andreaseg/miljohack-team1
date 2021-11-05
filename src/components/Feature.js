import React from 'react';
import Row from './Row';
import getKey from '../utils/GetKey';

  const featureNames = {
    CEILINGS: "Tak",
    WALLS: "Vegger",
    FLOORS: "Gulv",
    WINDOWS: "Vinduer",
    HEATING_UNIT: "Oppvarming i kWh",
    FRIDGE: "Kjøleskap",
    WASHING_MACHINE: "Vaskemaskin",
    CLOTHES_DRYER: "Tørketrommel",
    SHOWER: "Dusj"
  }

class FeaturesInfo extends React.Component {


  render() {
    if (this.props.value) {
      const id = "id-" + Math.random.toString()
      const values = this.props.value;
      const setValue = this.props.setValue
      const text = this.props.text

      console.log(values)
      const rows = values.map(feature => 
        (
          <div key={getKey()}>
            <Row text="Type:" value={featureNames[feature.type]}/>
            <Row text="Forbruk:" value={feature.energy+" kWh"} />
            <Row text="Utslipp:" value={feature.pollution+" CO2-ekvivalenter"} />
          </div>)
      )

      return (
          <div>
            {rows}
          </div>
      )
    } else {
      return (null)
    }
  }
}

export default FeaturesInfo;