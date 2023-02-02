import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Routing from "./Routing";

function App() {
  return (
    <>
      <div className="Navapp">
        <Navigation />
      </div>
      <div className="App">
        <Routing />
      </div>
    </>
  );
}

export default App;
