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
    const features = this.props.features;

    if (features && features.length > 0) {
      const values = this.props.features;
      const rows = values.map(feature => 
        (
          <div key={getKey()}>
            <h3>{featureNames[feature.type]}</h3>
            Forbruk: {parseInt(feature.energy)+" kWh"}<br />
            Utslipp: {parseInt(feature.pollution)+" CO2-ekvivalenter"}<br />
            Utgifter: {parseInt(feature.expense)+"kr"}<br />
          </div>)
      )


      return (
          <div>
            <h2>Ditt forbruk</h2>
            {rows}
          </div>
      )
    } else {
      return (null)
    }
  }
}

export default FeaturesInfo;