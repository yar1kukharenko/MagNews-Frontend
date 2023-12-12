import { Link } from 'react-router-dom';
import logoAlt from 'assets/img/logo-alt.png';

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div id="top-footer" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-widget about-widget">
                  <div className="footer-logo">
                    <Link to="/" className="logo">
                      <img src={logoAlt} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
        <div id="bottom-footer" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-push-6">
                <ul className="footer-links">
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
                </ul>
              </div>

              <div className="col-md-6 col-md-pull-6">
                <div className="footer-copyright">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>
                  All rights reserved | This template is made with <i
                    className="fa fa-heart-o"
                    aria-hidden="true"
                  ></i>{' '}
                  by{' '}
                  <a href="https://colorlib.com" target="_blank" rel="noreferrer">
                    Colorlib
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
