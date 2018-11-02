
import React, {Component} from 'react';
import Logo from "../Logo.png";
import Header from "./Header.js";
import NavbarMenu from "./NavbarMenu.js"
import {Link} from "react-router-dom";

class Navbar extends Component {
	state = {
		active: true,
		menu: false
	}

	toggleHeader = () => {
		this.setState((prevState) => {
			return {
				active: !prevState.active,
				menu: false
			}
		});
		this.props.clearFixed();
	}

	showMenu = () => {
		this.props.toggleFixed();
		this.setState((prevState) => {
			return {
				menu: !prevState.menu,
				active: false
			}
		})
	}
	close = () => {
		this.props.clearFixed();
		this.setState({
			active: true,
			menu: false
		})
	}

	render() {
		return (
			<div className="Navbar">
				<div className="container">
					<div className="row navbar-flex">
						<div className="col-md-2 col-sm-3 col-xs-5">
							<Link to="/"><img src={Logo} alt="Logo-img" className="img img-responsive" /></Link>
						</div>
						<div className="col-md-2 col-md-offset-8 col-sm-2 col-sm-offset-7 col-xs-2 col-xs-offset-5">
							<span className="navbar-question" onClick={this.toggleHeader}>?</span>
							<h4 className="navbar-h4 hidden-xs">МЕНИ</h4>
							{this.state.menu ? <span className="closed" onClick={this.close}>✕</span>
							: <span className="hamburger" onClick={this.showMenu}>☰</span> }
						</div>
					</div>
					<div className="row">
						{this.state.menu && <NavbarMenu/>}
					</div>
				</div>
				{this.state.active && <Header toggleHeader={this.toggleHeader} />}
			</div>
		);
	}
}

export default Navbar;
