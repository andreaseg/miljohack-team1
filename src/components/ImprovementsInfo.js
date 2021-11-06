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

        function updateImprovements(isEnabled, improvement) {
            let updatedImprovements;
            if (isEnabled) {
                updatedImprovements = [improvement, ...improvements];
            } else {
                updatedImprovements = improvements.filter(item => item.value !== improvement.value);
            }
            setImprovements(updatedImprovements);


            // Easter egg
            const easterLeft = improvementItems.map(it => it.value).sort().join('.');
            const easterRight = updatedImprovements.map(it => it.value).sort().join('.');
            console.log(easterLeft, easterRight);
            if (easterLeft === easterRight) {
              console.log("Kraa kraa kraa");
              new Audio("./sounds/kraa.mp3").play();
            }
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
                {rows}
            </div>
        )
    }
}

export default ImprovementsInfo;