import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { IArticle } from '../../Models/IArticle.ts';

interface ArticleItemProps {
  article: IArticle;
  className?: string;
}

const ArticleItem: FC<ArticleItemProps> = memo(({ article, className }) => {
  return (
    <article className={`article ${className}`}>
      <div className="article-img">
        <Link to={`/article/${article.id}`}>
          <img src={article.image_url} alt="" />
        </Link>
      </div>
      <div className="article-body">
        <h4 className="article-title">
          <Link to={`/article/${article.id}`}>{article.title}</Link>
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
  );
});

ArticleItem.displayName = 'ArticleItem';

export default ArticleItem;
