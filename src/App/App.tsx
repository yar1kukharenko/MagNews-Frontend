import '../App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article" element={<ArticlePage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
