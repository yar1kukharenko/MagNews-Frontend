import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import 'assets/css/bootstrap.min.css';
import 'assets/css/font-awesome.min.css';
import 'assets/css/owl.theme.default.css';
import 'assets/css/style.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { setupStore } from './store/store.ts';

const store = setupStore();

// Инициализация Echo с Pusher

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
