import React from 'react';
import Row from './Row';
import getKey from '../utils/GetKey';
import Note from './Note';

  const featureNames = {
    CEILINGS: "Tak",
    WALLS: "Vegger",
    FLOORS: "Gulv",
    WINDOWS: "Vinduer",
    HEATING_UNIT: "Oppvarming",
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

      const sorted = values.sort((a, b) => (a.pollution < b.pollution) ? 1 : -1).slice(0, 3);
      const sumSorted = sorted.map(item => item.pollution).reduce((acc, a) => acc + a, 0);

      const rows = sorted.map(feature => 
        (
          <div key={getKey()}>
            <h4>{featureNames[feature.type]}</h4>
            Forbruk: {parseInt(feature.energy)+" kWh"}<br />
            Utslipp: {parseInt(feature.pollution)+" CO2-ekvivalenter"}<br />
            Utgifter: {parseInt(feature.expense)+"kr"}<br />
          </div>)
      )


      return (
          <div>
            <h2>Ditt forbruk</h2>
              Ditt totale forbruk er {parseInt(sumSorted)}<br />
              Se hvilke kråker som stjeler mest!
            <h3>Dine topp 3 kråker!</h3>
            {rows}

          </div>
      )
    } else {
      return (null)
    }
  }
}

export default FeaturesInfo;