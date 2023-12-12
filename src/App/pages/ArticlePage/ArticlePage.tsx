import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
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

              <div className="article-comments">
                <div className="section-title">
                  <h2 className="title">Comments</h2>
                </div>
                {comments &&
                  comments.map(
                    (comment) =>
                      !!comment.is_approved && (
                        <Comment key={comment.id} user_id={comment.user_id} message={comment.message} />
                      ),
                  )}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
