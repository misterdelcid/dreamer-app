import React, { useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { IconButton, ModalWhiteSpace, ThemeSelector } from './'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import FilterDramaIcon from "@material-ui/icons/FilterDrama";


const NavBar = props => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleModalChange = () => {
        setModalOpen(!modalOpen);
    }

    return (
      <NavBarContainer>
        <StyledModal>
          <ModalWhiteSpace
            handleModalChange={handleModalChange}
            modalOpen={modalOpen}
          />
          <div className={`nav-drawer ${modalOpen ? "open" : ""}`}>
            <StyledDrawerNavLink to="/" onClick={handleModalChange}>
              Posts
            </StyledDrawerNavLink>
            <StyledDrawerNavLink to="/add" onClick={handleModalChange}>
              Add
            </StyledDrawerNavLink>
            <StyledDrawerNavLink to="/search" onClick={handleModalChange}>
              Search
            </StyledDrawerNavLink>
            <ThemeSelector label drawer/>
          </div>
        </StyledModal>

        <StyledNavBar>
          <StyledLogoBlock onClick={(e) => props.history.push("/")}>
            <StyledLogo />
            <div>
              <h1>Dream.r</h1>
              <p>A journal that helps you log your dreams</p>
            </div>
          </StyledLogoBlock>
          <StyledNav>
            <StyledNavLink to="/">Posts</StyledNavLink>
            <StyledNavLink to="/add">Add</StyledNavLink>
            <StyledNavLink to="/search">Search</StyledNavLink>
            <ThemeSelector navbar />
          </StyledNav>
          <StyledHamburgerIcon>
            <IconButton handleClick={handleModalChange}>
              <MenuRoundedIcon />
            </IconButton>
          </StyledHamburgerIcon>
        </StyledNavBar>
      </NavBarContainer>
    );};

//Component Styles

const NavBarContainer = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.white};
`;

const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0 16px 0;
  margin: 0 auto 0 auto;
  background-color: transparent;
  width: ${(props) => props.theme.primaryWidth};
  z-index: 5;
  @media (min-width: 600px) {
    width: ${(props) => props.theme.secondaryWidth};
    max-width: ${(props) => props.theme.maxWidth};
  }
`;

const StyledLogoBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    h1 {
        font-size: 1.2em;
    }
    p {
        font-size: .5em;
    }
`;

const StyledLogo = styled(FilterDramaIcon)`
  &&& {
    font-size: 40px;
    margin-right: 8px;
    color: ${(props) => props.theme.colors.gray21};
`;

const StyledNav = styled.nav`
    display: none;
    @media (min-width: 600px) {
      display: flex;
    }
`;

const StyledNavLink = styled(NavLink)`
    align-self: center;
    margin: 8px;
    text-decoration: none;
    color: ${props => props.theme.colors.gray21};
    transition: ${props => props.theme.primaryTransition};
    &:hover {
      color: ${props => props.theme.colors.primaryColor};
    }
`;

const StyledHamburgerIcon = styled.div`
    display: flex;
    @media (min-width: 600px) {
      display: none;
    }
`;

const StyledModal = styled.div`
  .nav-drawer {
    display: flex;
    flex-direction: column;
    z-index: 200;
    width: 300px;
    background: ${(props) => props.theme.colors.grayEE};
    position: fixed;
    right: 0px;
    top: 0px;
    bottom: 0px;
    transform: translateX(100%);
    transition: transform 0.25s ease-in-out;
  }
  .nav-drawer.open {
    display: flex;
    transform: translateX(0);
    box-shadow: 0 0 40px rgba(black, 0.85);
  }
`;

const StyledDrawerNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${props => props.theme.colors.gray21};
    padding: 24px 32px;
    transition: ${props => props.theme.colors.primaryTransition};
    &:hover {
        color: ${props => props.theme.colors.grayCC};
        background: ${props => props.theme.colors.gray21};
        transition: ${props => props.theme.colors.primaryTransition};
    }
`;

export default withRouter(NavBar);