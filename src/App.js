import React from 'react';
import { connect } from 'react-redux'
import { Router, Switch, Route } from "react-router-dom" 
import createHistory from 'history/createBrowserHistory';
import { AddPostPage, EditPostPage, SearchPostsPage, PageNotFound, NavBar, PostsPage, TitleBar, LoginPage } from './components'
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './styles/theme'
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

export const history = createHistory();

const App = props => {
  return (
    <ThemeProvider theme={props.theme === "light" ? lightTheme : darkTheme}>
      <StyledApp>
        <Router history={history}>
          <NavBar />
          <TitleBar />
          <StyledContainer page>
            <Switch>
              <PublicRoute path="/" component={LoginPage} exact={true} />
              <PrivateRoute path="/posts" component={PostsPage} />
              <PrivateRoute path="/add" component={AddPostPage} />
              <PrivateRoute path="/edit/:id" component={EditPostPage} />
              <PrivateRoute path="/search" component={SearchPostsPage} />
              <Route component={PageNotFound} />
            </Switch>
          </StyledContainer>
        </Router>
      </StyledApp>
    </ThemeProvider>
  );}

const StyledApp = styled.div`
  min-height: 100vh;
  height: 100%;
  font-family: ${(props) => props.theme.fonts.primaryFont};
  color: ${(props) => props.theme.colors.gray21};
  background-color: ${(props) => props.theme.colors.grayCC};
`;

const StyledContainer = styled.div`
  width: ${(props) => props.theme.primaryWidth};
  margin 0 auto; 
  padding-bottom: 86px;
  @media (min-width: 600px) {
    width: ${(props) => props.theme.secondaryWidth};
    max-width: ${(props) => props.theme.maxWidth};
  }
`;

const mapStateToProps = state => ({
  theme: state.theme,
})

export default connect(mapStateToProps)(App)