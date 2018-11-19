import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo-full.png'
import navbarStyles from './navbar.module.css'

const Navbar = () => (
    <nav className={`navbar ${navbarStyles.navbarTop}`} role="navigation" aria-label="dropdown navigation">
        <div className="container">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <figure className="image">
                        <img src={logo} alt="" />
                    </figure>
                </Link>
                <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>
            <div className="navbar-start">
                <Link className="navbar-item" to="/">
                    Home
                </Link>
                <Link className="navbar-item" to="/shop">
                    Shop
                </Link>
                <Link className="navbar-item" to="/why-malawi">
                    Why malawi?
                </Link>
                <div className="navbar-item has-dropdown is-hoverable">
                    <Link className="navbar-link" to="/projects">
                        Projects
                    </Link>
                    <div className="navbar-dropdown">
                        <Link className="navbar-item" to="/projects/sams-village">
                            Sams village
                        </Link>
                        <Link className="navbar-item" to="/health/a-child-is-born">
                            A child is born
                        </Link>
                        <Link className="navbar-item" to="/projects/sams-village/njewa-new-office">
                            Njewa new office
                        </Link>
                    </div>
                </div>    
                <div className="navbar-item has-dropdown is-hoverable">
                    <Link className="navbar-link" to="/get-involved">
                        Get involved
                    </Link>
                    <div className="navbar-dropdown">
                        <Link className="navbar-item" to="/projects/sams-village">
                            Sams village
                        </Link>
                        <Link className="navbar-item" to="/health/a-child-is-born">
                            A child is born
            </Link>
                        <Link className="navbar-item" to="/projects/sams-village/njewa-new-office">
                            Njewa new office
            </Link>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link className="navbar-link" to="/about-us">
                            About us
                        </Link>
                        <div className="navbar-dropdown">
                            <Link className="navbar-item" to="/about-us/team">
                                Team
                            </Link>
                            <Link className="navbar-item" to="/health/a-child-is-born">
                                A child is born
                            </Link>
                            <Link className="navbar-item" to="/projects/sams-village/njewa-new-office">
                                Njewa new office
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="navbar-end">
                <a
                    className="navbar-item"
                    href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="icon">
                        <img src={github} alt="Github" />
                    </span>
                </a>
            </div>
        </div>
  </nav>
        )
        
        export default Navbar
