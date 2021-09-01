import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const randomNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p> {number} </p>
        <button onClick={randomNumber}>Gerar outro numero</button>
      </header>
    </div>
  );
}

export default App;
