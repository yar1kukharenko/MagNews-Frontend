import '../App.css';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { lazy, Suspense, useEffect, useRef } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

const Footer = lazy(() => import('components/Footer'));
const Header = lazy(() => import('components/Header'));
const ArticleListPage = lazy(() => import('./pages/ArticleListPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const Login = lazy(() => import('./pages/Login'));
const MePage = lazy(() => import('./pages/MePage/MePage.tsx'));
const Registration = lazy(() => import('./pages/Registration'));

function App() {
  const echoInitialized = useRef(false);

  useEffect(() => {
    if (!echoInitialized.current) {
      window.Pusher = Pusher;
      window.Echo = new Echo({
        broadcaster: 'pusher',
        key: 'a0690b63d24efe7a4744',
        cluster: 'eu',
        encrypted: true,
        // Добавьте следующую строку для работы с авторизированными каналами
        auth: {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
        },
      });
      const token = localStorage.getItem('access_token');
      if (token) {
        window.Echo.channel(`articles`).listen('ArticleCreated', (e) => {
          toast(<Link to={`http://localhost:8000/article/${e.articleId}`}>Новая статья!</Link>);
        });
      }
      echoInitialized.current = true;
    }
  }, []);
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
    </Suspense>
  );
}

export default App;
