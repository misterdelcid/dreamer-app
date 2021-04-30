import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { history } from './App';
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import { createGlobalStyle } from 'styled-components'
import { startSetPosts } from './redux/postsActions'
import { firebase } from './firebase/firebase'
import { startSetTheme } from './redux/themeActions'
import { LoadingPage } from './components'
import { login, logout } from './redux/authActions'

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

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(connectedStyledApp, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(
  <LoadingPage />,
  document.getElementById("root")
);



firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    console.log('uid', user.uid);
    store.dispatch(startSetTheme());
    store.dispatch(startSetPosts()).then(() => {
      renderApp();
      if (user) {
        if (history.location.pathname === '/') {
          history.push('/posts');
        }
      }
    });

  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

serviceWorker.register();
