import React from "react";
import getKey from "../utils/GetKey";

class ImprovementsDropdown extends React.Component {

  render() {
    function getSelectedItem(event) {
        console.log("event");
        console.log(event);

        const e = document.getElementById("elementId");

        const value = e.options[e.selectedIndex].value;
        const name = e.options[e.selectedIndex].text;

        console.log(name);
        console.log(value);
        return {
            name,
            value,
        };
    }

    const addImprovement = this.props.addImprovement;
    const values = this.props.values;

    if (values) {
        console.log("her er values");
        console.log(values);
        const options = values.map((item) => 
            (<option key={getKey()} value={item.value}>{item.name}</option>)
        );

        return (
            <div>
                <select>{options}</select>
                <button onClick={(e) => addImprovement(getSelectedItem(e))}>Legg til</button>
            </div>
        );
    } else {
        return (null);
    }
  }
}

export default ImprovementsDropdown;
