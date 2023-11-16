import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { HashRouter  } from 'react-router-dom';
import App from './App';
import ScrollToTop from './utils/scrollToTop';

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ScrollToTop />
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
