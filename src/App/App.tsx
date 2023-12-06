import '../App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';

function App() {
  const { categoryTitle } = useParams();
  return (
    <>
      <Header currentCategory={categoryTitle} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories">
          <Route path=":categoryId" element={<ArticleListPage />} />
        </Route>
        <Route path="/article" element={<ArticlePage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
