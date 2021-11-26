import React from "react";
import NavigationMenu from "./components/navbar";
import Intro from "./components/intro";
import "./style/index.scss";
import ExtensiveRange from "./components/extensiveRange";
import WideExperience from "./components/wideExperience";
import WideSlide from "./components/wideExperianceSlide";
import AlwaysInformed from "./components/alwaysInformed";
import SatisfiedCustomers from "./components/satisfiedCustomers";

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <Intro />
      <ExtensiveRange />
      <WideExperience />
      <WideSlide />
      <AlwaysInformed />
      <SatisfiedCustomers />
    </div>
  );
}

export default App;
