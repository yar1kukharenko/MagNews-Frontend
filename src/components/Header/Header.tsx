import * as classNames from 'classnames';
import { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoAlt from 'assets/img/logo-alt.png';
import logo from 'assets/img/logo.png';
import { articleAPI } from '../../services/ArticleService.ts';

const Header = () => {
  const [navCollapse, setNavCollapse] = useState(false);
  const [searchCollapse, setSearchCollapse] = useState(false);
  const { data: categories = [] } = articleAPI.useFetchAllFiltersQuery('');
  const toggleNavCollapse = useCallback(() => {
    setNavCollapse((prevNavCollapse) => !prevNavCollapse);
  }, []);

  const toggleSearchCollapse = useCallback(() => {
    setSearchCollapse((prevSearchCollapse) => !prevSearchCollapse);
  }, []);
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Предполагая, что URL имеет формат '/categories/имя_категории'
  const currentCategory = pathSegments[1];

  const token = localStorage.getItem('access_token');

  return (
    <div>
      <header id="header">
        <div id="top-header">
          <div className="container">
            <div className="header-links">
              <ul>
                {!token && (
                  <>
                    <li>
                      <Link to="/login">
                        <i className="fa fa-sign-in"></i> Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/registration">
                        <i className="fa fa-sign-in"></i> Registration
                      </Link>
                    </li>
                  </>
                )}
                {token && (
                  <li>
                    <Link to="/me">Me</Link>
                  </li>
                )}
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
                <li>
                  <Link to={`/`}>Главная</Link>
                </li>
                {categories &&
                  categories.map((category) => (
                    <li key={category.id}>
                      <Link to={`/categories/${category.id}`}>{category.title}</Link>
                    </li>
                  ))}
              </ul>
            </nav>
            <div className="button-nav">
              <button
                className={classNames('search-collapse-btn', searchCollapse && 'active')}
                onClick={toggleSearchCollapse}
              >
                <i className="fa fa-search"></i>
              </button>
              <button className="nav-collapse-btn" onClick={toggleNavCollapse}>
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
