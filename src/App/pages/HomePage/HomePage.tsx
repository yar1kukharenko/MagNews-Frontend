import imgMd1 from 'assets/img/img-md-1.jpg';
import imgMd2 from 'assets/img/img-md-2.jpg';
import imgMd3 from 'assets/img/img-md-3.jpg';
import imgMd4 from 'assets/img/img-md-4.jpg';
import imgWidget1 from 'assets/img/img-widget-1.jpg';
import imgWidget2 from 'assets/img/img-widget-2.jpg';
import imgWidget3 from 'assets/img/img-widget-3.jpg';
import imgWidget4 from 'assets/img/img-widget-4.jpg';
import imgWidget5 from 'assets/img/img-widget-5.jpg';
import imgWidget6 from 'assets/img/img-widget-6.jpg';

const HomePage = () => {
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="title">Trending Posts</h2>
              </div>

              <div className="tab-content">
                <div id="tab1" className="tab-pane fade in active">
                  <div className="row">
                    <div className="col-md-3 col-sm-6">
                      <article className="article">
                        <div className="article-img">
                          <a href="#">
                            <img src={imgMd1} alt="" />
                          </a>
                          <ul className="article-info">
                            <li className="article-type">
                              <i className="fa fa-camera"></i>
                            </li>
                          </ul>
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

                    <div className="col-md-3 col-sm-6">
                      <article className="article">
                        <div className="article-img">
                          <a href="#">
                            <img src={imgMd2} alt="" />
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

                    <div className="col-md-3 col-sm-6">
                      <article className="article">
                        <div className="article-img">
                          <a href="#">
                            <img src={imgMd3} alt="" />
                          </a>
                          <ul className="article-info">
                            <li className="article-type">
                              <i className="fa fa-file-text"></i>
                            </li>
                          </ul>
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

                    <div className="col-md-3 col-sm-6">
                      <article className="article">
                        <div className="article-img">
                          <a href="#">
                            <img src={imgMd4} alt="" />
                          </a>
                          <ul className="article-info">
                            <li className="article-type">
                              <i className="fa fa-file-text"></i>
                            </li>
                          </ul>
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

                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <article className="article widget-article">
                        <div className="article-img">
                          <a href="#">
                            <img src={imgWidget1} alt="" />
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
                    </div>

                    <div className="col-md-4 col-sm-6">
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

                      <article className="article widget-article">
                        <div className="article-img">
                          <a href="#">
                            <img src={imgWidget4} alt="" />
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

                    <div className="col-md-4 hidden-sm">
                      <article className="article widget-article">
                        <div className="article-img">
                          <a href="#">
                            <img src={imgWidget5} alt="" />
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
                            <img src={imgWidget6} alt="" />
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
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="section-title">
                <h2 className="title">Popular Posts</h2>
              </div>

              <article className="article row-article">
                <div className="article-img">
                  <a href="#">
                    <img src={imgMd1} alt="" />
                  </a>
                </div>
                <div className="article-body">
                  <ul className="article-info">
                    <li className="article-category">
                      <a href="#">News</a>
                    </li>
                    <li className="article-type">
                      <i className="fa fa-file-text"></i>
                    </li>
                  </ul>
                  <h3 className="article-title">
                    <a href="#">Duis urbanitas eam in, tempor consequat.</a>
                  </h3>
                  <ul className="article-meta">
                    <li>
                      <i className="fa fa-clock-o"></i> January 31, 2017
                    </li>
                    <li>
                      <i className="fa fa-comments"></i> 33
                    </li>
                  </ul>
                  <p>
                    Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te
                    inciderint cotidieque pro, ei iisque docendi qui.
                  </p>
                </div>
              </article>

              <article className="article row-article">
                <div className="article-img">
                  <a href="#">
                    <img src={imgMd2} alt="" />
                  </a>
                </div>
                <div className="article-body">
                  <ul className="article-info">
                    <li className="article-category">
                      <a href="#">News</a>
                    </li>
                    <li className="article-type">
                      <i className="fa fa-file-text"></i>
                    </li>
                  </ul>
                  <h3 className="article-title">
                    <a href="#">Duis urbanitas eam in, tempor consequat.</a>
                  </h3>
                  <ul className="article-meta">
                    <li>
                      <i className="fa fa-clock-o"></i> January 31, 2017
                    </li>
                    <li>
                      <i className="fa fa-comments"></i> 33
                    </li>
                  </ul>
                  <p>
                    Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te
                    inciderint cotidieque pro, ei iisque docendi qui.
                  </p>
                </div>
              </article>

              <article className="article row-article">
                <div className="article-img">
                  <a href="#">
                    <img src={imgMd3} alt="" />
                  </a>
                </div>
                <div className="article-body">
                  <ul className="article-info">
                    <li className="article-category">
                      <a href="#">News</a>
                    </li>
                    <li className="article-type">
                      <i className="fa fa-file-text"></i>
                    </li>
                  </ul>
                  <h3 className="article-title">
                    <a href="#">Duis urbanitas eam in, tempor consequat.</a>
                  </h3>
                  <ul className="article-meta">
                    <li>
                      <i className="fa fa-clock-o"></i> January 31, 2017
                    </li>
                    <li>
                      <i className="fa fa-comments"></i> 33
                    </li>
                  </ul>
                  <p>
                    Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te
                    inciderint cotidieque pro, ei iisque docendi qui.
                  </p>
                </div>
              </article>

              <article className="article row-article">
                <div className="article-img">
                  <a href="#">
                    <img src={imgMd4} alt="" />
                  </a>
                </div>
                <div className="article-body">
                  <ul className="article-info">
                    <li className="article-category">
                      <a href="#">News</a>
                    </li>
                    <li className="article-type">
                      <i className="fa fa-file-text"></i>
                    </li>
                  </ul>
                  <h3 className="article-title">
                    <a href="#">Duis urbanitas eam in, tempor consequat.</a>
                  </h3>
                  <ul className="article-meta">
                    <li>
                      <i className="fa fa-clock-o"></i> January 31, 2017
                    </li>
                    <li>
                      <i className="fa fa-comments"></i> 33
                    </li>
                  </ul>
                  <p>
                    Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te
                    inciderint cotidieque pro, ei iisque docendi qui.
                  </p>
                </div>
              </article>

              <div className="article-pagination">
                <ul>
                  <li className="active">
                    <a href="#" className="active">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="widget subscribe-widget">
                <div className="widget-title">
                  <h2 className="title">Subscribe to Newslatter</h2>
                </div>
                <form>
                  <input className="input" type="email" placeholder="Enter Your Email" />
                  <button className="input-btn">Subscribe</button>
                </form>
              </div>

              <div className="widget">
                <div className="widget-title">
                  <h2 className="title">Most Read</h2>
                </div>

                <article className="article widget-article">
                  <div className="article-img">
                    <a href="#">
                      <img src={imgWidget1} alt="" />
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

      <div className="section">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
