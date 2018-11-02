import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import './App.sass';
import Gamecards from "./Components/Gamecards.js";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import Staffpicks from "./Components/Staffpicks.js";
import Gamepage from "./Components/Gamepage.js";
import Scrolltotop from "./Components/Scrolltotop.js";
import ScrollUp from "react-scroll-up";

class App extends Component {
	state= {
		position: ""
	}
	toggleFixed = () => {
		this.setState({
			position: 'fixed'	
		})
	}

	clearFixed = () => {
		this.setState({
			position: ""
		})
	}

  render() {
  	const style = {
  		position: this.state.position
  	};

  	const scrollButton = {
  		position: "fixed",
  		bottom: 100,
  		right: 20,
  		cursor: "pointer",
  		transitionDuration: "0.2s",
  		transitionTimingFunction: "linear",
  		transitionDelay: "0s"
  	};

    return (
     <Router>
     	<Scrolltotop>
     		 <div className="App" style={style}>
		        <Navbar toggleFixed={this.toggleFixed} clearFixed={this.clearFixed} />
		        <Switch>
		        	<Route exact path="/" component={Gamecards} />
		        	<Route path="/Gamepage/:id" component={Gamepage} />
		        </Switch>
		        <Staffpicks />
		        <Footer />
		        <ScrollUp showUnder={160} style={scrollButton}>
		       		<div className="text-center buttonUp">
		       			<i className="fas fa-angle-up fa-3x"></i>
			        	<span>ПОЧЕТОК</span>
		       		</div>
		        </ScrollUp>
		     </div>
     	</Scrolltotop>
     </Router>
    );
  }
}

export default App;
