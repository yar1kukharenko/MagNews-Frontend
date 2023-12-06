import imgWidget2 from 'assets/img/img-widget-2.jpg';
import imgWidget3 from 'assets/img/img-widget-3.jpg';
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
                    <a href="#" className="logo">
                      <img src={logoAlt} alt="" />
                    </a>
                    <p>
                      Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te
                      inciderint cotidieque pro, ei iisque docendi qui.
                    </p>
                  </div>
                </div>
                <div className="footer-widget subscribe-widget">
                  <div className="widget-title">
                    <h2 className="title">Subscribe to Newslatter</h2>
                  </div>
                  <form>
                    <input className="input" type="email" placeholder="Enter Your Email" />
                    <button className="input-btn">Subscribe</button>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h2 className="title">Featured Posts</h2>
                  </div>

                  <article className="article widget-article">
                    <div className="article-img">
                      <a href="#">
                        <img src={imgWidget2} alt="" />
                      </a>
                    </div>
                    <div className="article-body">
                      <h4 className="article-title">
                        <a href="#">Duis urbanitas eam in, tempor consequat.</a>
                      </h4>
                      <ul className="article-meta">
                        <li>
                          <i className="fa fa-clock-o"></i> January 31, 2017
                        </li>
                        <li>
                          <i className="fa fa-comments"></i> 33
                        </li>
                      </ul>
                    </div>
                  </article>
                  <article className="article widget-article">
                    <div className="article-img">
                      <a href="#">
                        <img src={imgWidget2} alt="" />
                      </a>
                    </div>
                    <div className="article-body">
                      <h4 className="article-title">
                        <a href="#">Duis urbanitas eam in, tempor consequat.</a>
                      </h4>
                      <ul className="article-meta">
                        <li>
                          <i className="fa fa-clock-o"></i> January 31, 2017
                        </li>
                        <li>
                          <i className="fa fa-comments"></i> 33
                        </li>
                      </ul>
                    </div>
                  </article>
                  <article className="article widget-article">
                    <div className="article-img">
                      <a href="#">
                        <img src={imgWidget3} alt="" />
                      </a>
                    </div>
                    <div className="article-body">
                      <h4 className="article-title">
                        <a href="#">Duis urbanitas eam in, tempor consequat.</a>
                      </h4>
                      <ul className="article-meta">
                        <li>
                          <i className="fa fa-clock-o"></i> January 31, 2017
                        </li>
                        <li>
                          <i className="fa fa-comments"></i> 33
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
              </div>
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
