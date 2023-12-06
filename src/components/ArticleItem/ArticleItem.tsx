import { FC } from 'react';
import { IArticle } from '../../Models/IArticle.ts';

interface ArticleItemProps {
  article: IArticle;
  className?: string;
}

const ArticleItem: FC<ArticleItemProps> = ({ article, className }) => {
  return (
    <article className={`article ${className}`}>
      <div className="article-img">
        <a href="#">
          <img src={article.image_url} alt="" />
        </a>
      </div>
      <div className="article-body">
        <h4 className="article-title">
          <a href="#">{article.title}</a>
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
};

export default ArticleItem;
