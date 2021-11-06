import React from 'react';
import InputField from './InputField';
import Row from './Row';
import getKey from '../utils/GetKey';
import Checkbox from './Checkbox';

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
          <InputField value={inputHouse.area} setValue={(e) => {inputHouse.area = e; setInputHouse(inputHouse); }}>
            Boareal i kvadratmeter
            </InputField> 
          <InputField value={inputHouse.constructionYear} setValue={(e) => {inputHouse.constructionYear = e; setInputHouse(inputHouse);}}>
            Bygningsår
            </InputField> 
          <Checkbox checked={!inputHouse.isApartment} onCheck={(e) => {inputHouse.isApartment = !e; setInputHouse(inputHouse);}}>
            Bor du i enebolig eller rekkehus?
          </Checkbox>
          {inputHouse.isApartment === false && <InputField value={inputHouse.floors} setValue={(e) => {inputHouse.floors = e; setInputHouse(inputHouse);}}>
          Antall etasjer i boligen
          </InputField> }
        </div>
    )
  }
}

export default HouseInputs;