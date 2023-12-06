import av1 from 'assets/img/av-1.jpg';
import av2 from 'assets/img/av-2.jpg';
import md1 from 'assets/img/img-md-1.jpg';
import md2 from 'assets/img/img-md-2.jpg';
import md3 from 'assets/img/img-md-3.jpg';
import md4 from 'assets/img/img-md-4.jpg';
import imgPost from 'assets/img/img-post.jpg';
import widget1 from 'assets/img/img-widget-1.jpg';
import widget2 from 'assets/img/img-widget-2.jpg';
import widget3 from 'assets/img/img-widget-3.jpg';

const ArticlePage = () => {
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ul className="article-breadcrumb">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>Duis urbanitas eam in, tempor consequat.</li>
              </ul>

              <article className="article article-post">
                <div className="article-share">
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="google">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </div>
                <div className="article-main-img">
                  <img src={imgPost} alt="" />
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
                  <h1 className="article-title">Duis urbanitas eam in, tempor consequat.</h1>
                  <ul className="article-meta">
                    <li>
                      <i className="fa fa-clock-o"></i> April 04, 2017
                    </li>
                    <li>
                      <i className="fa fa-comments"></i> 33
                    </li>
                  </ul>
                  <p>
                    Facilisi complectitur eos eu. Est tritani argumentum in, ei suas ignota admodum vim, ipsum choro has
                    ut. Ei vim noluisse luptatum, nominavi mandamus qui ut. Ne usu lucilius mnesarchum, vim ex nisl
                    summo expetenda, in dicta appareat usu. Ea cum altera fuisset adipisci, in sed eius tacimates, eu
                    duo magna numquam placerat.
                  </p>
                  <p>
                    Sea at dolorum nominavi adipiscing, ei eam mundi legimus, sit deleniti definiebas et. Pri dicit
                    latine reformidans ne, offendit rationibus incorrupte an qui, eum populo molestie tacimates te. Nec
                    ea facer vituperatoribus, cu pro feugiat minimum platonem. Elit accusam ei per. Duis illum est ut.
                  </p>
                  <p>
                    Ex eos esse sale eligendi. Eos ut exerci audire nostrum, at pro dolores tacimates voluptaria. Facete
                    disputando at quo, omittantur philosophia id qui. Ad labore facete suscipiantur sed. Cu iisque
                    sanctus inciderint has, per quodsi liberavisse ea.
                  </p>
                  <p>
                    Sit falli nonumes atomorum ex, ipsum populo iisque eum at. Sumo solet omnium eum ad, quis omnium ut
                    ius, volumus splendide sed ad. Mea vide dicta ne, appareat patrioque has an. Wisi sale delectus eum
                    eu, corpora salutatus no sit. Sale interesset eu per.
                  </p>
                  <h4>Sit falli nonumes atomorum ex, ipsum populo iisque eum at</h4>
                  <p>
                    Facilisi complectitur eos eu. Est tritani argumentum in, ei suas ignota admodum vim, ipsum choro has
                    ut. Ei vim noluisse luptatum, nominavi mandamus qui ut. Ne usu lucilius mnesarchum, vim ex nisl
                    summo expetenda, in dicta appareat usu. Ea cum altera fuisset adipisci, in sed eius tacimates, eu
                    duo magna numquam placerat.
                  </p>
                  <p>
                    Sea at dolorum nominavi adipiscing, ei eam mundi legimus, sit deleniti definiebas et. Pri dicit
                    latine reformidans ne, offendit rationibus incorrupte an qui, eum populo molestie tacimates te. Nec
                    ea facer vituperatoribus, cu pro feugiat minimum platonem. Elit accusam ei per. Duis illum est ut.
                  </p>
                  <p>
                    Ex eos esse sale eligendi. Eos ut exerci audire nostrum, at pro dolores tacimates voluptaria. Facete
                    disputando at quo, omittantur philosophia id qui. Ad labore facete suscipiantur sed. Cu iisque
                    sanctus inciderint has, per quodsi liberavisse ea.
                  </p>
                  <p>
                    Sit falli nonumes atomorum ex, ipsum populo iisque eum at. Sumo solet omnium eum ad, quis omnium ut
                    ius, volumus splendide sed ad. Mea vide dicta ne, appareat patrioque has an. Wisi sale delectus eum
                    eu, corpora salutatus no sit. Sale interesset eu per.
                  </p>
                </div>
              </article>

              <div className="widget-tags">
                <ul>
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
              </div>

              <div className="article-comments">
                <div className="section-title">
                  <h2 className="title">Comments</h2>
                </div>

                <div className="media">
                  <div className="media-left">
                    <img src={av1} alt="" />
                  </div>
                  <div className="media-body">
                    <div className="media-heading">
                      <h5>
                        John Doe <span className="reply-time">April 04, 2017 At 9:30 AM</span>
                      </h5>
                    </div>
                    <p>
                      Eu usu aliquip vivendo. Impedit suscipit invidunt te vel, sale periculis id mea. Ne nec atqui
                      paulo,
                    </p>
                    <a href="#" className="reply-btn">
                      Reply
                    </a>
                  </div>

                  <div className="media">
                    <div className="media-left">
                      <img src={av2} alt="" />
                    </div>
                    <div className="media-body">
                      <div className="media-heading">
                        <h5>
                          John Doe <span className="reply-time">April 04, 2017 At 9:30 AM</span>
                        </h5>
                      </div>
                      <p>
                        Eu usu aliquip vivendo. Impedit suscipit invidunt te vel, sale periculis id mea. Ne nec atqui
                        paulo,
                      </p>
                      <a href="#" className="reply-btn">
                        Reply
                      </a>
                    </div>

                    <div className="media">
                      <div className="media-left">
                        <img src={av1} alt="" />
                      </div>
                      <div className="media-body">
                        <div className="media-heading">
                          <h5>
                            John Doe <span className="reply-time">April 04, 2017 At 9:30 AM</span>
                          </h5>
                        </div>
                        <p>
                          Eu usu aliquip vivendo. Impedit suscipit invidunt te vel, sale periculis id mea. Ne nec atqui
                          paulo,
                        </p>
                        <a href="#" className="reply-btn">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="media">
                  <div className="media-left">
                    <img src={av2} alt="" />
                  </div>
                  <div className="media-body">
                    <div className="media-heading">
                      <h5>
                        John Doe <span className="reply-time">April 04, 2017 At 9:30 AM</span>
                      </h5>
                    </div>
                    <p>
                      Eu usu aliquip vivendo. Impedit suscipit invidunt te vel, sale periculis id mea. Ne nec atqui
                      paulo,
                    </p>
                    <a href="#" className="reply-btn">
                      Reply
                    </a>
                  </div>
                </div>
              </div>

              <div className="article-reply-form">
                <div className="section-title">
                  <h2 className="title">Leave a reply</h2>
                </div>

                <form>
                  <input className="input" placeholder="Name" type="text" />
                  <input className="input" placeholder="Email" type="email" />
                  <input className="input" placeholder="Website" type="url" />
                  <textarea className="input" placeholder="Message"></textarea>
                  <button className="input-btn">Send Message</button>
                </form>
              </div>
            </div>

            <div className="col-md-4">
              <div className="widget social-widget">
                <div className="widget-title">
                  <h2 className="title">Stay Connected</h2>
                </div>
                <ul>
                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                      <br />
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter"></i>
                      <br />
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="google">
                      <i className="fa fa-google"></i>
                      <br />
                      <span>Google+</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="instagram">
                      <i className="fa fa-instagram"></i>
                      <br />
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="youtube">
                      <i className="fa fa-youtube"></i>
                      <br />
                      <span>Youtube</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="rss">
                      <i className="fa fa-rss"></i>
                      <br />
                      <span>RSS</span>
                    </a>
                  </li>
                </ul>
              </div>

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
                      <img src={widget1} alt="" />
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
                      <img src={widget2} alt="" />
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
                      <img src={widget3} alt="" />
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
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="title">Related Post</h2>
              </div>

              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <article className="article">
                    <div className="article-img">
                      <a href="#">
                        <img src={md1} alt="" />
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
                        <img src={md2} alt="" />
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
                        <img src={md3} alt="" />
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
                        <img src={md4} alt="" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
