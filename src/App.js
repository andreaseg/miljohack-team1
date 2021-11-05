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
  const [improvements, setImprovements] = useState([
    {
      name: "Varmepumpe",
      value: "HEAT_EXCHANGE_UNIT"
    },
    {
      name: "Isolering av vegger",
      value: "WALL_ISOLATION",
    },
  ]);
  const [responseId, setResponseId] = useState(null);
  const [response, setResponse] = useState(null);
  const [features, setFeatures] = useState(null);

  async function postHousingData() {
    console.log("postHousingData()")
    const improvementEnums = improvements.map(improvement => improvement.value)
    const id = await api.postHouse({
      area,
      energyGrade,
      floors,
      constructionYear,
      municipalityNumber,
      isApartment,
      improvementEnums
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
    const updatedImprovements = [...improvements, improvement];
    setImprovements(updatedImprovements)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="content-in-middle">
        <div className="text">

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

export default App;
