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
    <div className="App">
      <header className="App-header">
        <Header modeSwitch={modeSwitch} lightMode={lightMode}/>
      </header>
    </div>
  );
}

export default App;
