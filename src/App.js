import "./index.css";
import Color from "./components/Color";

function App() {
  return (
    <div className="App">
      <div className="circle"></div>
      <div className="mainContainer">
        <div className="gridContainer">
          <Color />
          <Color />
          <Color />
          <Color />
          <Color />
          <Color />
          <Color />
          <Color />
          <Color />
          <Color />
          <Color />
          <Color />
          <Color />
          <Color />
          <Color />
        </div>
      </div>

      <h1>
        COLORS / <span>1</span>
      </h1>
    </div>
  );
}

export default App;
