import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Loading, Wrapper, Authentication } from "./components";

import Navigation from "./navigation";
import "./App.less";
import "keen-slider/keen-slider.min.css";
import "boxicons/css/boxicons.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-image-lightbox/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Loading />
      <Authentication />
      <Wrapper>
        <Navigation />
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
