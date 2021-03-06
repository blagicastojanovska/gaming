import React, { useLayoutEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/global.scss";
import Gamecards from "./components/gameCards";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Staffpicks from "./components/staffpicks";
import Gamepage from "./components/gamePage";
import Scrolltotop from "./components/scrollToTop";
import TriggerScrollTop from "./components/triggerScrollTop";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const App = () => {
  const [isBtnVisible, setBtnVisibility] = useState(false);

  useLayoutEffect(() => {
    const handleBtnVisibility = () => {
      if (window.scrollY > 160) {
        setBtnVisibility(true);
      } else {
        setBtnVisibility(false);
      }
    };

    window.addEventListener("scroll", handleBtnVisibility);

    return () => window.removeEventListener("scroll", handleBtnVisibility);
  }, []);

  const routes = [
    { path: "/", name: "Gamecards", Component: Gamecards },
    { path: "/Gamepage/:id", name: "Gamepage", Component: Gamepage },
  ];

  return (
    <Router>
      <Scrolltotop>
        <Navbar />
        {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
                  <div className="page">
                    <Component {...match} />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        <Staffpicks />
        <Footer />
        <CSSTransition in={isBtnVisible} timeout={300} classNames="state" unmountOnExit>
          <TriggerScrollTop />
        </CSSTransition>
      </Scrolltotop>
    </Router>
  );
};

export default App;
