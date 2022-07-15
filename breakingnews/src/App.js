import {useState} from "react";
import Header from "./components/header/Header";

function App() {
  const [lightMode, setLightMode] = useState(false);

  function modeSwitch() {
    if (lightMode) {
      setLightMode(false);
    } else {
      setLightMode(true);
    }
  }

  return (
    <div
      className="App"
      style={{ backgroundColor: `${lightMode ? "#3F4E4F" : "white"}` }}
    >
      <header className="App-header">
        <Header modeSwitch={modeSwitch} lightMode={lightMode} />
      </header>
    </div>
  );
}

export default App;
