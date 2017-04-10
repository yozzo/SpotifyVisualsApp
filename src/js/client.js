import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Favorites from "./pages/Favorites";
import Todos from "./pages/Todos";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";


import Ruqia from "./pages/T1-Ruqia";
import EmpireSounds from "./pages/T2-Empire-Sounds";
import MHope from "./pages/T3-MHope";
import Biomes from "./pages/T4-Biomes";
import Kraken from "./pages/T5-Kraken";
import Pathos from "./pages/T6-Pathos";
import LastMinuteChangeOfHeart from "./pages/T7-Last-Minute-Change-Of-Heart";
import TeardropTattoo from "./pages/T8-Teardrop-Tattoo";
import Blueprint from "./pages/T9-Blueprint";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Todos}></IndexRoute>
      <Route path="ruqia" component={Ruqia}></Route>
      <Route path="empireSounds" component={EmpireSounds}></Route>
      <Route path="mHope" component={MHope}></Route>
      <Route path="biomes" component={Biomes}></Route>
      <Route path="kraken" component={Kraken}></Route>
      <Route path="pathos" component={Pathos}></Route>
      <Route path="lastMinuteChangeOfHeart" component={LastMinuteChangeOfHeart}></Route>
      <Route path="teardropTattoo" component={TeardropTattoo}></Route>
      <Route path="blueprint" component={Blueprint}></Route>
    </Route>
  </Router>,
app);

