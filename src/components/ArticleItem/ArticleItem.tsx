import { FC } from 'react';
import { IArticle } from '../../Models/IArticle.ts';

interface ArticleItemProps {
  article: IArticle;
}

const ArticleItem: FC<ArticleItemProps> = ({ article }) => {
  return (
    <div className={'article'}>
      id: {article.id}
      title: {article.title}
      category: {article.category.id}
      image: {article.image_url}
      <img src={article.image_url} alt="" />
    </div>
  );
};

export default ArticleItem;
