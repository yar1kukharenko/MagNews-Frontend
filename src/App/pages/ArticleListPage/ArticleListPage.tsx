import { useParams } from 'react-router-dom';
import ArticleItem from 'components/ArticleItem/ArticleItem.tsx';
import { articleAPI } from '../../../services/ArticleService.ts';

const ArticleListPage = () => {
  const { categoryId = '' } = useParams();
  const { data: categories = [] } = articleAPI.useFetchAllFiltersQuery('');
  const category = categories.find((category) => category.id === Number.parseInt(categoryId));
  const categoryTitle = category ? category.title : 'Категория не найдена';
  // @ts-ignore
  const { data: filteredArticles = [] } = articleAPI.useFetchAllArticlesQuery({ category: category.id });
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="title">{categoryTitle}</h2>
                <div className="row">
                  {filteredArticles &&
                    filteredArticles.map((article) => (
                      <div key={article.id} className="col-md-4 col-sm-6">
                        <ArticleItem article={article} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleListPage;
