import React from 'react';
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

class ImprovementsInfo extends React.Component {

    containsImprovement(improvement, existingImprovements) {
        return existingImprovements.filter(userImprovements => 
            userImprovements.value === improvement.value
        ).length > 0;
    }

    render() {
        const improvements = this.props.house.improvements;
        const setImprovements = this.props.setImprovements;

        console.log("render improvements");
        console.log(improvements);

        function updateImprovements(isEnabled, improvement) {
            let updatedImprovements;
            console.log("updateImprovements");
            console.log(isEnabled);
            console.log(improvement);
            console.log("-----");
            if (isEnabled) {
                updatedImprovements = [improvement, ...improvements];
            } else {
                updatedImprovements = improvements.filter(item => item.value !== improvement.value);
            }
            setImprovements(updatedImprovements);
        }

        const rows = improvementItems.map(improvement => 
                <Checkbox 
                    key={getKey()} 
                    checked={this.containsImprovement(improvement, improvements)}
                    onCheck={enabled => updateImprovements(enabled, improvement)}>
                    {improvement.name}
                </Checkbox>
        );

        return (
            <div>
                <h3>Forbedringer</h3>
                {rows}
            </div>
        )
    }
}

export default ImprovementsInfo;