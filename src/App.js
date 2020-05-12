import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" 
import { AddPostPage, EditPostPage, SearchPostsPage, PageNotFound, NavBar, HomePage, TitleBar } from './components'
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './styles/theme'

const App = props => {
  return (
    <ThemeProvider theme={props.theme === "light" ? lightTheme : darkTheme}>
      <StyledApp>
        <Router>
          <NavBar />
          <TitleBar />
          <StyledContainer page>
            <Switch>
              <Route path="/" component={HomePage} exact={true} />
              <Route path="/add" component={AddPostPage} />
              <Route path="/edit/:id" component={EditPostPage} />
              <Route path="/search" component={SearchPostsPage} />
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
  padding-bottom: 60px;
`

const StyledContainer = styled.div`
  width: ${(props) => props.theme.primaryWidth};
  margin: 0 auto;
`

const mapStateToProps = state => ({
  theme: state.theme,
})

export default connect(mapStateToProps)(App)