import React from "react";
import { Link } from "gatsby";
// import github from '../img/github-icon.svg'
import logo from "../img/logo-full.png";
import navbarStyles from "./navbar.module.css";

const Navbar = () => (
  <nav
    className={`navbar ${navbarStyles.navbarTop}`}
    role="navigation"
    aria-label="dropdown navigation"
  >
    <div className={`container ${navbarStyles.navContainer}`}>
      <Link to="/" className={navbarStyles.navbarLogo}>
        <figure className="image">
          <img src={logo} alt="" />
        </figure>
      </Link>
      <div className="navbar-brand">
        <div
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </div>
      </div>
      <div className="navbar-start">
        <Link className={`navbar-item ${navbarStyles.navbarItemParent}`} to="/">
          Home
        </Link>
        <Link
          className={`navbar-item ${navbarStyles.navbarItemParent}`}
          to="/shop"
        >
          Shop
        </Link>
        <Link
          className={`navbar-item ${navbarStyles.navbarItemParent}`}
          to="/why-malawi"
        >
          Why malawi?
        </Link>
        <div className="navbar-item has-dropdown is-hoverable">
          <Link
            className={`navbar-link ${navbarStyles.navbarItemParent}`}
            to="/projects"
          >
            Projects
          </Link>
          <div className="navbar-dropdown">
            <Link className="navbar-item" to="/projects/sams-village">
              Sams village
            </Link>
            <Link className="navbar-item" to="/health/a-child-is-born/">
              A child is born
            </Link>
            <Link
              className="navbar-item"
              to="/projects/sams-village/njewa-new-office/"
            >
              Njewa new office
            </Link>
            <Link className="navbar-item" to="/environment/kafutwe-food-mill/">
              Kafutwe Food Mill
            </Link>
            <Link className="navbar-item" to="/environment/groundnut-farming/">
              Groundnut Farming
            </Link>
            <Link className="navbar-item" to="/projects/maternity-unit/">
              Maternity Unit
            </Link>
          </div>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <Link
            className={`navbar-link ${navbarStyles.navbarItemParent}`}
            to="/get-involved"
          >
            Get involved
          </Link>
          <div className="navbar-dropdown">
            <Link className="navbar-item" to="/get-involved/donate/">
              Donate
            </Link>
            <Link className="navbar-item" to="/get-involved/fundraise/">
              Fundraise for us
            </Link>
            <Link
              className="navbar-item"
              to="/get-involved/holiday-in-france-for-us/"
            >
              Holiday in France for us
            </Link>
            <Link
              className="navbar-item"
              to="/get-involved/use-your-baggage-allowance-to-lilongwe/"
            >
              Use your baggage allowance to Lilongwe!
            </Link>
          </div>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <Link
            className={`navbar-link ${navbarStyles.navbarItemParent}`}
            to="/about-us"
          >
            About us
          </Link>
          <div className="navbar-dropdown">
            <Link className="navbar-item" to="/about-us/team">
              Team
            </Link>
            <Link className="navbar-item" to="/health/a-child-is-born">
              A child is born
            </Link>
            <Link
              className="navbar-item"
              to="/projects/sams-village/njewa-new-office"
            >
              Njewa new office
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-end" />
    </div>
  </nav>
);

export default Navbar;
