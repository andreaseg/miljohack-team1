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

const FeatureInfoRow = (props) => {
  const feature = props.feature;

  return (
    <div>
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
}

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

      const rows = sorted.map(it => <FeatureInfoRow key={"feature_row_" + it.type} feature={it} />);

      return (
        <div>
          <Note right='true'>
            <h2>Dine kråker!</h2>
            <p>
              Vår miljøkråke har sett på huset ditt og funnet plasser
              å stå.
            </p>
          </Note>
          <div>{rows} </div>
          <h2 className="green">Oppvarming</h2>
          <div>{heating.map(it => {it.type = null; return it;}).map(it => <FeatureInfoRow key={"feature_row_" + it.type} feature={it} />)}</div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default FeaturesInfo;
