import React from "react";
import { Link } from "gatsby";
// import github from '../img/github-icon.svg'
import logo from "../img/logo-full.png";
import navbarStyles from "./navbar.module.css";

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }

  render() {
    return (
      <nav
        className={`navbar is-transparent ${navbarStyles.navbarTop}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className={`container ${navbarStyles.navContainer}`}>
          <Link to="/" className={navbarStyles.navbarLogo}>
            <figure className="image">
              <img src={logo} alt="" />
            </figure>
          </Link>
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link
                className={`navbar-item ${navbarStyles.navbarItemParent}`}
                to="/shop"
              >
                Shop
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/why-malawi">
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
                  <Link
                    className="navbar-item"
                    to="/environment/kafutwe-food-mill/"
                  >
                    Kafutwe Food Mill
                  </Link>
                  <Link
                    className="navbar-item"
                    to="/environment/groundnut-farming/"
                  >
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
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
