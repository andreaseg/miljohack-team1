import React from "react";
import Row from "./Row";
import getKey from "../utils/GetKey";
import Note from "./Note";

import styles from "./FeaturesInfo.module.css";

const featureNames = {
  CEILINGS: "Tak",
  WALLS: "Vegger",
  FLOORS: "Gulv",
  WINDOWS: "Vinduer",
  HEATING_UNIT: "Oppvarming",
  FRIDGE: "Kjøleskap",
  WASHING_MACHINE: "Vaskemaskin",
  CLOTHES_DRYER: "Tørketrommel",
  SHOWER: "Dusj",
};

class FeaturesInfo extends React.Component {
  render() {
    const features = this.props.features;

    if (features && features.length > 0) {
      const values = this.props.features;

      const sorted = values
        .sort((a, b) => (a.pollution < b.pollution ? 1 : -1))
        .filter((feature) => feature.type !== "HEATING_UNIT")
        .slice(0, 3);

      const heating = values.filter(
        (feature) => feature.type === "HEATING_UNIT"
      );

      const createDisplayElement = (feature) => (
        <div key={getKey()}>
          {feature.type !== null && <div className={styles.header}>{featureNames[feature.type]}</div>}
          <div className={styles.container}>
            <div className={styles.energy}>
              <div className={styles.value}>{parseInt(feature.energy)} KwT</div>
              <div className={styles.label}>Forbruk</div>
            </div>
            <div className={styles.pollution}>
              <div className={styles.value}>{parseInt(feature.expense)} kr</div>
              <div className={styles.label}>Utgifter</div>
            </div>
            <div className={styles.expenses}>
              <div className={styles.value}>
                {parseInt(feature.pollution)} CO<sub>2</sub>
              </div>
              <div className={styles.label}>Utslipp</div>
            </div>
          </div>
        </div>
      );

      const rows = sorted.map(createDisplayElement);

      return (
        <div>
          <h2>Ditt forbruk</h2>
          <Note>
            <h2>Dine topp 3 kråker!</h2>
            <p>
              Vår energikråke har sett på huset ditt og funnet plasser
              å stå.
            </p>
          </Note>
          <div>{rows} </div>
          <h2 className="green">Oppvarming</h2>
          <div>{heating.map(it => {it.type = null; return it;}).map(createDisplayElement)}</div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default FeaturesInfo;
