import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import { createGlobalStyle } from 'styled-components'
import { startSetPosts } from './redux/postsActions'
import './firebase/firebase'
import { startSetTheme } from './redux/themeActions'
import { LoadingPage } from './components'

const store = configureStore();

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }
`;

const connectedStyledApp = 
    <Provider store={store}>
      <GlobalStyle />
        <App />
    </Provider>;

ReactDOM.render(
  <LoadingPage />,
  document.getElementById("root")
);

store.dispatch(startSetTheme());
store.dispatch(startSetPosts()).then(() => {
  ReactDOM.render(connectedStyledApp, document.getElementById('root'));
});

serviceWorker.register();
