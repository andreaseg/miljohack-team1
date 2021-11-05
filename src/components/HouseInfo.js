import React from 'react';

class HouseInfo extends React.Component {
  render() {
    const headerText = this.props.headerText;
    const house = this.props.house;


    if (house) {
        console.log("houseInfo()")
        console.log(house)

        let improvements;
        if (house.improvements) {
            improvements = <>Forbedringer: {house.improvements}<br /></>
        } else {
            improvements = (null)
        }

        return (
            <div>
                <h2>{headerText}</h2>
                Areal: {house.area}<br />
                Byggeår: {house.constructionYear}<br />
                Energimerking: {house.energyGrade}<br />
                Leilighet: {house.isApartment ? "Ja" : "Nei"}
                Kommunenummer: {house.municipalityNumber}<br />
                Etasjer: {house.floors}<br />
                {improvements}
            </div>
        )
    } else {
        return (null)
    }
  }
}

export default HouseInfo;