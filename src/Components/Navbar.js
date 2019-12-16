import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import NavbarMenu from './NavbarMenu.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [navbarInfo, setNavbarInfo] = useState({
		active: true,
		menu: false
	});

	useEffect(() => {
		navbarInfo.menu &&
			document.body.setAttribute(
				'style',
				'position: fixed; width: 100%; height: 100%; overflow: hidden'
			);

		return () => document.body.removeAttribute('style');
	}, [navbarInfo.menu]);

	const toggleHeader = () => {
		setNavbarInfo({ active: !navbarInfo.active, menu: false });
	};

	const showMenu = () => {
		setNavbarInfo({ menu: !navbarInfo.menu, active: false });
	};

	const close = () => {
		setNavbarInfo({ active: false, menu: false });
	};

	return (
		<div className="Navbar">
			<div className="container">
				<div className="row navbar-flex">
					<div className="col-md-2 col-sm-3 col-xs-5">
						<Link to="/">
							<img
								src={require('../assets/img/Logo.png')}
								alt="Logo-img"
								className="img img-responsive"
							/>
						</Link>
					</div>
					<div className="col-md-2 col-md-offset-8 col-sm-2 col-sm-offset-7 col-xs-2 col-xs-offset-5">
						<span className="navbar-question" onClick={toggleHeader}>
							?
						</span>
						<h4 className="navbar-h4 hidden-xs">МЕНИ</h4>
						{navbarInfo.menu ? (
							<span className="closed" onClick={close}>
								✕
							</span>
						) : (
							<span className="hamburger" onClick={showMenu}>
								☰
							</span>
						)}
					</div>
				</div>
				<div className="row">{navbarInfo.menu && <NavbarMenu />}</div>
			</div>
			{navbarInfo.active && <Header toggleHeader={toggleHeader} />}
		</div>
	);
};

export default Navbar;
