import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>BrainsterBox</title>
        <meta property="og:title" content="BrainsterBox" />
        <meta
          name="og:description"
          content="Вашата лична кутија со ресурси и алатки за креативна колаборација и
                 откривање на потенцијалот во твојот тим или организација."
        />
        <meta property="og:image" content="https://toolbox.hyperisland.com/images/fb-og.png" />
        <meta property="og:type" content="article" />
        <meta name="author" content="Blagica Stojanovska" />
        <meta name="og:url" content="https://blagicastojanovska.github.io/gaming/" />
        <meta name="base_url" content="https://blagicastojanovska.github.io/gaming/" />
      </Helmet>
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
