import React from "react";
import NavigationMenu from "./components/navbar";
import Intro from "./components/intro";
import "./style/index.scss";

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <Intro />
    </div>
  );
}

export default App;
