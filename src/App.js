import logo from "./miljohack_logo_resized.png";
import "./App.css";
import { data } from "./Data";
import { chart } from "./Charts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="content-in-middle">
        <div className="header-text">Kra! Kra! Kra!</div>
        <div className="content-text">
          Her er det masse tekst!
          <div className="chart-text">{ chart(data) }</div>
        </div>
      </div>
    </div>
  );
}

export default App;
