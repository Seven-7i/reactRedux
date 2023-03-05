import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 统一给每个容器自动传递store，使用react-redux不用再写store.subscribe,react会自动处理
  <Provider store={store}>
    <App />
  </Provider>
);
