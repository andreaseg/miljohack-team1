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
    const inputHouse = { ...this.props.inputHouse };
    const setInputHouse = this.props.setInputHouse;

    return (
        <div className="container">
          <InputField text="Areal: " value={inputHouse.area} setValue={(e) => {inputHouse.area = e; setInputHouse(inputHouse); }}/> 
          <InputField text="Bygningsår: " value={inputHouse.constructionYear} setValue={(e) => {inputHouse.constructionYear = e; setInputHouse(inputHouse);}}/> 
          <InputField text="Energimerking: " value={inputHouse.energyGrade} setValue={(e) => {inputHouse.energyGrade = e; setInputHouse(inputHouse);}}/> 
          <InputField text="Leilighet: " value={inputHouse.isApartment} setValue={(e) => {inputHouse.isApartment = e; setInputHouse(inputHouse);}}/> 
          <InputField text="Etasjer: " value={inputHouse.floors} setValue={(e) => {inputHouse.floors = e; setInputHouse(inputHouse);}}/> 
        </div>
    )
  }
}

export default HouseInputs;