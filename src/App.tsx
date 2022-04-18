import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Loading } from "./components";
import "./App.less";
import "keen-slider/keen-slider.min.css";
import "boxicons/css/boxicons.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Navigation from "./navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Loading />
      <Navigation />
    </BrowserRouter>
  );
};

export default App;
