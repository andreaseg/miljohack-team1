import React from 'react';
import InputField from './InputField';
import Row from './Row';
import getKey from '../utils/GetKey';

const improvementItems = [
  {
    name: "Varmepumpe",
    value: "HEAT_EXCHANGE_UNIT"
  },
  {
    name: "Isolering av vegger",
    value: "WALL_ISOLATION",
  },
  {
    name: "Målrettet isolering",
    value: "TARGETED_ISOLATION",
  }, 
  {
    name: "Vinduer",
    value: "WINDOWS",
  },
  {

    name: "Solcellepaneler",
    value: "SOLAR_CELLS",
  },
  {
    name: "Jordvarme",
    value: "GEOTHERMAL",
  },
  {

    name: "Fjernvarme",
    value: "DISTRICT_HEATING",
  },
  {
    name: "Sparedusj",
    value: "SHOWER"
  }
]

class HouseInputs extends React.Component {
  render() {
    const area = this.props.area;
    const setArea = this.props.setArea;
    const constructionYear = this.props.constructionYear
    const setConstructionYear = this.props.setConstructionYear
    const energyGrade = this.props.energyGrade;
    const setEnergyGrade = this.props.setEnergyGrade;
    const isApartment = this.props.isApartment;
    const setIsApartment = this.props.setIsApartment;
    const improvements = this.props.improvements;
    const setImprovements = this.props.setImprovements;
    const addImprovement = this.props.addImprovement;
    const floors = this.props.floors;
    const setFloors = this.props.setFloors;
    const showImprovements = this.props.showImprovements;


    let improvementElement;

    /*
    if (showImprovements && improvements) {
      console.log(improvements)

      const appliedImprovements = improvements.map(improvement => 
        <div className="row">
          <div className="column"></div>
          <div key={getKey()} className="row column">{improvement.name}, </div>
        </div>
      );


      improvementElement = (
        <div className="row">
          <div className="column bold">Utførte tiltak:</div><br />
          {appliedImprovements}
        </div>
      );
    } else {
      improvementElement = (null);
    }
    */

    return (
        <div className="container">
          <InputField text="Areal: " value={area} setValue={setArea}/> 
          <InputField text="Bygningsår: " value={constructionYear} setValue={setConstructionYear}/> 
          <InputField text="Energimerking: " value={energyGrade} setValue={setEnergyGrade}/> 
          <InputField text="Leilighet: " value={isApartment} setValue={setIsApartment}/> 
          <InputField text="Etasjer: " value={floors} setValue={setFloors}/> 
          {improvementElement}
        </div>
    )
  }
}

export default HouseInputs;