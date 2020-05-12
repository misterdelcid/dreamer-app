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
import CircularProgress from "@material-ui/core/CircularProgress"
import styled from 'styled-components'

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

const StyledLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #424242;
`;

const StyledLoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  width: 200px;
  height: 100px;
  color: #fff;
  font-size: 60px;
  font-weight: 300;
`;

const StyledProgress = styled(CircularProgress)`
  &&& {
    color: #ee0979;
  }
`;

// ReactDOM.render(
//   <StyledLoading>
//     <StyledLoadingMessage>Dream.r</StyledLoadingMessage>
//     <StyledProgress />
//   </StyledLoading>,
//   document.getElementById("root")
// );

store.dispatch(startSetTheme());
store.dispatch(startSetPosts()).then(() => {
  ReactDOM.render(connectedStyledApp, document.getElementById('root'));
});

serviceWorker.register();
