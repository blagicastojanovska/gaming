import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Header from "../header";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHeaderOpen, setHeaderOpen] = useState(true);
  const [isScrolled, setScrolled] = useState(false);

  const header = useRef();

  const handleScroll = () => {
    if (window.scrollY > header.current.offsetHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleHeader = () => {
    setHeaderOpen(!isHeaderOpen);

    isMenuOpen && setMenuOpen(false);
  };

  const toggleNavbarMenu = () => {
    setMenuOpen(!isMenuOpen);

    isHeaderOpen && setHeaderOpen(false);
  };

  useEffect(() => {
    // hide the navbar on keyup on Escape
    const handleCloseOnEscape = (e) => e.keyCode === 27 && setMenuOpen(false);

    const handleCloseNavbar = () => setMenuOpen(false);

    window.addEventListener("click", handleCloseNavbar);
    window.addEventListener("keyup", handleCloseOnEscape);

    return () => {
      window.removeEventListener("click", handleCloseNavbar);
      window.removeEventListener("keyup", handleCloseOnEscape);
    };
  });

  return (
    <>
      <header id="top" ref={header}>
        <div className="inner-wrap">
          <div className="primary-segment">
            <Link to="/" className="logo">
              <img src={require("../../assets/img/logo.png")} alt="Logo" />
            </Link>
            <CSSTransition in={!isScrolled} timeout={300} classNames="state" unmountOnExit>
              <button
                type="button"
                className={isHeaderOpen ? "trigger-header state-active" : "trigger-header"}
                onClick={toggleHeader}
              >
                ?
              </button>
            </CSSTransition>
            <button
              type="button"
              aria-controls="menu-main"
              aria-expanded={isMenuOpen ? "true" : "false"}
              aria-label="Menu"
              id="trigger-menu-main"
              className={isMenuOpen ? "state-active" : ""}
              onClick={(e) => {
                e.stopPropagation();
                toggleNavbarMenu();
              }}
            >
              <span className="menu-label">мени</span>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
          <CSSTransition in={isMenuOpen} timeout={300} classNames="state" unmountOnExit>
            <NavbarMenu />
          </CSSTransition>
        </div>
      </header>
      <CSSTransition in={isHeaderOpen} timeout={300} classNames="state" unmountOnExit>
        <Header toggleHeader={toggleHeader} />
      </CSSTransition>
    </>
  );
};

export default Navbar;
