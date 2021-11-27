import React from "react";
import NavigationMenu from "./components/navbar";
import Intro from "./components/intro";
import ExtensiveRange from "./components/extensiveRange";
import WideExperience from "./components/wideExperience";
import WideSlide from "./components/wideExperianceSlide";
import AlwaysInformed from "./components/alwaysInformed";
import SatisfiedCustomers from "./components/satisfiedCustomers";
import VisitShowroom from "./components/visitShowroom";
import News from "./components/news";
import "./style/index.scss";

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
      <VisitShowroom />
      <News />
    </div>
  );
}

export default App;
