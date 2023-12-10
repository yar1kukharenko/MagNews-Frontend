import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import md1 from 'assets/img/img-md-1.jpg';
import md2 from 'assets/img/img-md-2.jpg';
import md3 from 'assets/img/img-md-3.jpg';
import md4 from 'assets/img/img-md-4.jpg';
import widget1 from 'assets/img/img-widget-1.jpg';
import widget2 from 'assets/img/img-widget-2.jpg';
import widget3 from 'assets/img/img-widget-3.jpg';
import Comment from 'components/Comment';
import { IUser } from '../../../Models/IUser.ts';
import { articleAPI } from '../../../services/ArticleService.ts';

const ArticlePage = () => {
  const { articleId = '1' } = useParams();
  const { data: article } = articleAPI.useFetchArticleQuery(Number.parseInt(articleId, 10));
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentArticle = Number.parseInt(pathSegments[1], 10);

  const { data: comments, refetch } = articleAPI.useFetchCommentsQuery(currentArticle);
  const [message, setMessage] = useState('');

  const [addComment] = articleAPI.useAddCommentMutation();
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    axios
      .post(
        'http://localhost:8080/api/auth/me',
        {},
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        },
      )
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    await addComment({
      id: currentArticle,
      comment: { article_id: currentArticle, user_id: user?.id, message: message },
    });
    setMessage('');
    refetch();
  };

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <article className="article article-post">
                <div className="article-main-img">
                  <img src={article && article.image_url} alt="" />
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
                  <h1 className="article-title">{article && article.title}</h1>
                  <ul className="article-meta">
                    <li>
                      <i className="fa fa-clock-o"></i> April 04, 2017
                    </li>
                    <li>
                      <i className="fa fa-comments"></i> 33
                    </li>
                  </ul>
                  {article && <div dangerouslySetInnerHTML={{ __html: article.content }} />}
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
                {comments &&
                  comments.map((comment) => (
                    <Comment key={comment.id} user_id={comment.user_id} message={comment.message} />
                  ))}
              </div>

              <div className="article-reply-form">
                <div className="section-title">
                  <h2 className="title">Leave a reply</h2>
                </div>
                <form>
                  <textarea
                    required={true}
                    className="input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                  ></textarea>
                  <button onClick={handleCreate} className="input-btn">
                    Send Message
                  </button>
                </form>
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
