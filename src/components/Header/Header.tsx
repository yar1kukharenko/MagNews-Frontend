import * as classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoAlt from 'assets/img/logo-alt.png';
import logo from 'assets/img/logo.png';

const Header = () => {
  const [navCollapse, setNavCollapse] = useState(false);
  const [searchCollapse, setSearchCollapse] = useState(false);

  return (
    <div>
      <header id="header">
        <div id="top-header">
          <div className="container">
            <div className="header-links">
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Advertisement</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-sign-in"></i> Login
                  </a>
                </li>
              </ul>
            </div>
            <div className="header-social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="center-header">
          <div className="container">
            <div className="header-logo">
              <Link className="logo" to={'/'}>
                <img src={logo} alt="" />
              </Link>
              {/*<a href="#" className="logo">*/}
              {/*  <img src={logo} alt="" />*/}
              {/*</a>*/}
            </div>
          </div>
        </div>
        <div id="nav-header">
          <div className="container">
            <nav id="main-nav" className={classNames(navCollapse && 'nav-collapse')}>
              <div className="nav-logo">
                <a href="#" className="logo">
                  <img src={logoAlt} alt="" />
                </a>
              </div>
              <ul className="main-nav nav navbar-nav">
                <li className="active">
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Sport</a>
                </li>
                <li>
                  <a href="#">Lifestyle</a>
                </li>
                <li>
                  <a href="#">Fashion</a>
                </li>
                <li>
                  <a href="#">Music</a>
                </li>
                <li>
                  <a href="#">Business</a>
                </li>
              </ul>
            </nav>
            <div className="button-nav">
              <button
                className={classNames('search-collapse-btn', searchCollapse && 'active')}
                onClick={() => setSearchCollapse(!searchCollapse)}
              >
                <i className="fa fa-search"></i>
              </button>
              <button className="nav-collapse-btn" onClick={() => setNavCollapse(!navCollapse)}>
                <i className="fa fa-bars"></i>
              </button>
              <div className={classNames('search-form', searchCollapse && 'search-collapse')}>
                <form>
                  <input className="input" type="text" name="search" placeholder="Search" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
