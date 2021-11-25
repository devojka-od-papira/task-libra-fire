import React from "react";
import NavigationMenu from "./components/navbar";
import Intro from "./components/intro";
import "./style/index.scss";
import ExtensiveRange from "./components/extensiveRange";

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <Intro />
      <ExtensiveRange />
    </div>
  );
}

export default App;
