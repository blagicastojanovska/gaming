import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/global.scss";
import Gamecards from "./components/gameCards";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Staffpicks from "./components/staffpicks";
import Gamepage from "./components/gamePage";
import Scrolltotop from "./components/scrollToTop";
import TriggerScrollTop from "./components/triggerScrollTop";

const App = () => (
  <Router>
    <Scrolltotop>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Gamecards} />
        <Route path="/Gamepage/:id" component={Gamepage} />
      </Switch>
      <Staffpicks />
      <Footer />
      <TriggerScrollTop />
    </Scrolltotop>
  </Router>
);

export default App;
