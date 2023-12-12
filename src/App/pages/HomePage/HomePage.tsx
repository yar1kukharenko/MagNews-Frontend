import ArticleItem from 'components/ArticleItem/ArticleItem.tsx';
import { articleAPI } from '../../../services/ArticleService.ts';

const HomePage = () => {
  const { data: first4articles } = articleAPI.useFetchAllArticlesQuery({ end: 4 });
  const { data: next6articles } = articleAPI.useFetchAllArticlesQuery({ start: 5, end: 10 });

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
                    {first4articles &&
                      first4articles.map((article) => (
                        <div key={article.id} className="col-md-3 col-sm-6">
                          <ArticleItem article={article} />
                        </div>
                      ))}
                  </div>

                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      {next6articles && next6articles[0] && (
                        <ArticleItem className="widget-article" article={next6articles[0]} />
                      )}
                      {next6articles && next6articles[1] && (
                        <ArticleItem className="widget-article" article={next6articles[1]} />
                      )}
                    </div>

                    <div className="col-md-4 col-sm-6">
                      {next6articles && next6articles[2] && (
                        <ArticleItem className="widget-article" article={next6articles[2]} />
                      )}

                      {next6articles && next6articles[3] && (
                        <ArticleItem className="widget-article" article={next6articles[3]} />
                      )}
                    </div>

                    <div className="col-md-4 hidden-sm">
                      {next6articles && next6articles[4] && (
                        <ArticleItem className="widget-article" article={next6articles[4]} />
                      )}{' '}
                      {next6articles && next6articles[5] && (
                        <ArticleItem className="widget-article" article={next6articles[5]} />
                      )}
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
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
