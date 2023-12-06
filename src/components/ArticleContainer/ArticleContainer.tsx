import ArticleItem from 'components/ArticleItem/ArticleItem.tsx';
import { articleAPI } from '../../services/ArticleService.ts';

const ArticleContainer = () => {
  const { data: articles, error, isLoading } = articleAPI.useFetchAllArticlesQuery(undefined);
  console.log(articles);
  return (
    <div>
      {isLoading && <h1>Идет загрузка</h1>}
      {error && <h1>Произошла ошибка</h1>}
      <div>{articles && articles.map((article) => <ArticleItem key={article.id} article={article} />)}</div>
    </div>
  );
};

export default ArticleContainer;
