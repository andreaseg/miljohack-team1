import React, { useEffect, useState } from "react";
import logo from "./miljohack_logo_resized.png";
import svgTest from "./art/iPhone8-1.svg";
import "./App.css";
import { data } from "./utils/Data";
import { chart } from "./components/Charts";
import api from "./api/Api";
import { useMediaQuery } from "react-responsive";

// Components
import HouseInfo from "./components/HouseInfo";
import FeaturesInfo from "./components/Feature";
import HouseInputs from "./components/HouseInputs";
import SB1Button from "./components/SB1Button";


function App() {

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });


  const [area, setArea] = useState(65);
  const [energyGrade, setEnergyGrade] = useState("C");
  const [floors, setFloors] = useState(1);
  const [constructionYear, setConstructionYear] = useState(2001);
  const [municipalityNumber, setMunicipalityNumber] = useState(301);
  const [isApartment, setIsApartment] = useState(false);
  const [improvements, setImprovements] = useState([]);
  const [responseId, setResponseId] = useState(null);
  const [response, setResponse] = useState(null);
  const [features, setFeatures] = useState(null);

  async function postHousingData() {
    console.log("postHousingData()")
    const id = await api.postHouse({
      area,
      energyGrade,
      floors,
      constructionYear,
      municipalityNumber,
      isApartment,
      improvements
    });

    console.log("got Id: "+id)
    setResponseId(id)
    //
    const result = await api.getHouse(id)
    setResponse(result)
  }

  async function getHouse() {
    console.log("getImprovements() responseId: " + responseId)
    if (responseId) {
      const result = await api.getHouse(responseId)
      setResponse(result)
    }
  }

  async function getEnergyProfile() {
    if (responseId) {
      const result = await api.getEnergyProfile(responseId)
      setFeatures(result)
    }
  }

  function addImprovement(improvement) {
    const updatedImprovements = improvements.push(improvements);
    setImprovements(updatedImprovements)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="content-in-middle">
        <div className="text">

          {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
          {isBigScreen && <p>You have a huge screen</p>}
          {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
          <p>Your are in {isPortrait ? "portrait" : "landscape"} orientation</p>
          {isRetina && <p>You are retina</p>}
          
          <h2>Din bolig</h2>

          <HouseInputs
            area={area}
            setArea={setArea}
            constructionYear={constructionYear}
            setConstructionYear={setConstructionYear}
            energyGrade={energyGrade}
            setEnergyGrade={setEnergyGrade}
            isApartment={isApartment}
            setIsApartment={setIsApartment}
            improvements={improvements}
            setImprovements={setImprovements}
            addImprovement={addImprovement}
            floors={floors}
            setFloors={setFloors} />

          <SB1Button 
            text="Send inn informasjon om bolig"
            onClick={postHousingData} />

          <HouseInfo headerText="Fra backend" house={response}/> 

          <SB1Button 
            text="Hent hus fra backend"
            onClick={getHouse} />

          <SB1Button 
            text="Hent forbruk"
            onClick={getEnergyProfile} />
          <FeaturesInfo value={features} setValue={setFeatures} />

        </div>

        <div className="chart-text">{chart(data)}</div>

      </div>
    </div>
  );
}

function getDropDownList(values, setValues, text) {
  const id = "id-" + Math.random.toString()
  return (
    <div className="input-block">
      <label htmlFor={id}>{text}</label>
      <input type="text" id={id} value={values} onChange={e => setValues(e.target.value)} />
    </div>
  )
}

/*


          <h2>Test info</h2>
          <div className="text-left">
            Areal: {area}<br />
            Byggeår: {constructionYear}<br />
            Energimerking: {energyGrade}<br />
            Leilighet: {isApartment ? "Ja" : "Nei"}<br />
            Kommunenummer: {municipalityNumber}<br />
            Etasjer: {floors}<br />
            Forbedringer: {improvements}<br />
          </div>


          p tags p tags p tags Lorem ipsum
          <img src={svgTest} className="App-logo" alt="logo" />
          {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
          {isBigScreen && <p>You have a huge screen</p>}
          {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
          <p>Your are in {isPortrait ? "portrait" : "landscape"} orientation</p>
          {isRetina && <p>You are retina</p>}











*/


        /*
          <div className="container">
            <InputField text="Areal: " value={area} setValue={setArea}/> 
            <InputField text="Bygningsår: " value={constructionYear} setValue={setConstructionYear}/> 
            <InputField text="Energymerking: " value={energyGrade} setValue={setEnergyGrade}/> 
            <InputField text="Leilighet: " value={isApartment} setValue={setIsApartment}/> 
            <InputField text="Etasjer: " value={floors} setValue={setFloors}/> 
            <InputField text="Forbedringer: " value={improvements} setValue={setImprovements}/> 
          </div>
        */

//const performGetRequest() =

export default App;
