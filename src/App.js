import React, { useState } from "react";
import logo from "./miljohack_logo_resized.png";
import styles from  "./App.module.css";
import api from "./api/Api";

// Components
import HouseInfo from "./components/HouseInfo";
import FeaturesInfo from "./components/FeaturesInfo";
import HouseInputs from "./components/HouseInputs";
import SB1Button from "./components/SB1Button";
import Checkbox from "./components/Checkbox";


function App() {
  const [houseId, setHouseId] = useState(null);

  const [inputHouse, setInputHouse] = useState({
    area: 65,
    energyGrade: "C",
    floors: 1,
    constructionYear: 2001,
    municipalityNumber: 301,
    isApartment: false
  });

  const [outputHouse, setOutputHouse] = useState(null)

  async function postHousingData() {
    console.log("postHousingData()");
    const id = await api.postHouse(inputHouse);

    console.log("got Id: "+id);
    const result = await api.getHouse(id);
    console.log("result");
    console.log(result);
    setHouseId(id);
    getEnergyProfile();
  }

  async function getHouse() {
    console.log("getHouse() responseId: " + houseId)
    if (houseId) {
      const result = await api.getHouse(houseId)
      console.log("getHouse()")
      console.log(result)

      setOutputHouse(result)
      return result;
    }
  }

  async function getEnergyProfile() {
    if (houseId) {
      const result = await api.getEnergyProfile(houseId)
      setOutputHouse(result)
    }
  }

  return (
    <div className={styles.content}>
      <header className={styles.header}>
      Din bolig
      </header>
      <div className={styles.main}>

          <Checkbox onCheck={checked => console.log("Checked", checked)}i >Textbox text</Checkbox>

          <b>Kråka på taket!</b>

          <Checkbox onCheck={checked => console.log("Checked", checked)}i ></Checkbox>

          <HouseInputs
            inputHouse={inputHouse}
            setInputHouse={setInputHouse} />

          <SB1Button 
            text="Send inn og hent informasjon om bolig"
            onClick={postHousingData} />

          <HouseInfo headerText="Backend Output" house={outputHouse} />


      </div>
      <footer className={styles.footer}>
        <img src={logo} alt="Miljøkråk1 Logo" />
      </footer>
    </div>
  );
}

export default App;