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
    if (this.props.features) {
      const values = this.props.features;
      const rows = values.map(feature => 
        (
          <div key={getKey()}>
            <Row text="Type:" value={featureNames[feature.type]}/>
            <Row text="Forbruk:" value={parseInt(feature.energy)+" kWh"} />
            <Row text="Utslipp:" value={parseInt(feature.pollution)+" CO2-ekvivalenter"} />
            <Row text="Utgifter:" value={parseInt(feature.expense)+"kr"}/>
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