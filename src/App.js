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
import ImprovementsInfo from "./components/ImprovementsInfo";

function App() {
  const [inputHouse, setInputHouse] = useState({
    area: 65,
    energyGrade: "C",
    floors: 1,
    constructionYear: 2001,
    municipalityNumber: 301,
    isApartment: false,
    improvements: [],
  });

  const [showImprovements, setShowImprovements] = useState(false);

  const [outputHouse, setOutputHouse] = useState();
  const [features, setFeatures] = useState([]);

  async function postHousingData() {
    const houseWithImprovements = { ...inputHouse };
    houseWithImprovements.improvements = houseWithImprovements.improvements.map(
      (improvement) => improvement.value
    );

    const id = await api.postHouse(houseWithImprovements);

    const house = await api.getHouse(id);
    setOutputHouse(house);

    getEnergyProfile(house, id);
  }

  async function getEnergyProfile(house, houseId) {
    if (house && houseId) {
      const features = await api.getEnergyProfile(houseId);
      setFeatures(features);
    }
  }

  function setImprovements(improvements) {
    const updatedHouse = { ...inputHouse };
    updatedHouse.improvements = improvements;
    setInputHouse(updatedHouse);
  }

  return (
    <div className={styles.content}>
      <header className={styles.header}>Din bolig</header>
      <div className={styles.main}>
        <Note>
          <h2>Miljøkråken</h2>
          <p>
            Fyll inn for din bolig, så finner miljøkråken hvor du lekker mest
            energi
          </p>
        </Note>
        <HouseInputs inputHouse={inputHouse} setInputHouse={setInputHouse} />
        {!showImprovements && (
          <button onClick={() => setShowImprovements(true)}>
            <span>Registrer forbedringer</span>{" "}
            <div className="arrowed">
              <div className="arrow-down"></div>
            </div>
          </button>
        )}
        {showImprovements && (
          <button onClick={() => setShowImprovements(false)}>
            <span>Registrer forbedringer</span>{" "}
            <div className="arrowed">
              <div className="arrow-up"></div>
            </div>
          </button>
        )}
        {showImprovements && (
          <ImprovementsInfo
            house={inputHouse}
            setImprovements={setImprovements}
          />
        )}


        <button className={styles.submit} onClick={postHousingData} >Beregn Forbruk</button>

        <FeaturesInfo features={features} />

        {features && features.length > 0 && (
          <div>
            <h2>Anbefalningen gjør at du sparer penger og miljøet</h2>
            <p>Du vil straks bli kontaktet av Enova som gjør en befaring og lager et tilbud. Du kan få dekket kostnader til ubedringer med et grønt lån.</p>
            <button>Bestill befaring nå</button>
          </div>
        )}
      </div>
      <footer className={styles.footer}>
        <img src={logo} alt="Miljøkråk1 Logo" />
      </footer>
    </div>
  );
}

export default App;
