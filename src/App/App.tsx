import '../App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import MePage from './pages/MePage/MePage.tsx';
import Registration from './pages/Registration';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories">
          <Route path=":categoryId" element={<ArticleListPage />} />
        </Route>
        <Route path="/article">
          <Route path={':articleId'} element={<ArticlePage />} />
        </Route>
        <Route path={'/registration'} element={<Registration />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/me'} element={<MePage />} />
        <Route path={'*'} element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
