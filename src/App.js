import React, { useState } from "react";
import logo from "./miljohack_logo_resized.png";
import "./Fonts.css";
import styles from "./App.module.css";
import api from "./api/Api";

// Components
import HouseInfo from "./components/HouseInfo";
import FeaturesInfo from "./components/FeaturesInfo";
import HouseInputs from "./components/HouseInputs";
import SB1Button from "./components/SB1Button";
import Checkbox from "./components/Checkbox";
import YourFootprint from "./components/YourFootprint";
import Note from "./components/Note";

function App() {
  const [inputHouse, setInputHouse] = useState({
    area: 65,
    energyGrade: "C",
    floors: 1,
    constructionYear: 2001,
    municipalityNumber: 301,
    isApartment: false,
  });

  const [outputHouse, setOutputHouse] = useState(null);
  const [features, setFeatures] = useState([]);

  async function postHousingData() {
    const id = await api.postHouse(inputHouse);

    const house = await api.getHouse(id);
    setOutputHouse(house);

    getEnergyProfile(house, id);
  }

  async function getEnergyProfile(house, houseId) {
    if (house && houseId) {
      const features = await api.getEnergyProfile(houseId);
      console.log(features);
      setFeatures(features);
    }
  }

  return (
    <div className={styles.content}>
      <header className={styles.header}>Din bolig</header>
      <div className={styles.main}>

        <Note>
          <h2>Miljøkråken</h2>
          <p>
            Fyll inn for din bolig, så finner miljøkråken hvor du lekker mest energi
          </p>
        </Note>

        <HouseInputs inputHouse={inputHouse} setInputHouse={setInputHouse} />

        <Note right='true'>
          <h1>Tekst her :)</h1>
        </Note>

        <SB1Button text="Se ditt forbruk" onClick={postHousingData} />

        <FeaturesInfo features={features} />
      </div>
      <footer className={styles.footer}>
        <img src={logo} alt="Miljøkråk1 Logo" />
      </footer>
    </div>
  );
}

export default App;
