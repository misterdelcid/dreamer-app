import React, { useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { startToggleTheme } from "../redux/themeActions"
import styled from 'styled-components'
import { IconButton, ModalWhiteSpace } from './'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import WbSunnyIcon from "@material-ui/icons/WbSunny"
import NightsStayIcon from "@material-ui/icons/NightsStay"
import Switch from "@material-ui/core/Switch"

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
              Home
            </StyledDrawerNavLink>
            <StyledDrawerNavLink to="/add" onClick={handleModalChange}>
              Add
            </StyledDrawerNavLink>
            <StyledDrawerNavLink to="/search" onClick={handleModalChange}>
              Search
            </StyledDrawerNavLink>
            <StyledThemeSelector>
              Mode:
              <StyledIconsAndSwitch>
                <WbSunnyIcon />
                <Switch
                  checked={props.theme === "dark"}
                  onChange={() => props.startToggleTheme()}
                />
                <NightsStayIcon />
              </StyledIconsAndSwitch>
            </StyledThemeSelector>
          </div>
        </StyledModal>

        <StyledNavBar>
          <StyledLogoBlock onClick={(e) => props.history.push("/")}>
            <h1>Dream.r</h1>
            <p>A journal that helps you log your dreams</p>
          </StyledLogoBlock>
          <StyledNav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/add">Add</StyledNavLink>
            <StyledNavLink to="/search">Search</StyledNavLink>
          </StyledNav>
          <IconButton handleClick={handleModalChange}>
            <MenuRoundedIcon />
          </IconButton>
        </StyledNavBar>
      </NavBarContainer>
    );}

//Component Styles

const NavBarContainer = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.white};
`

const StyledNavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0 16px 0;
    margin: 0 auto 0 auto;
    background-color: transparent;
    width: ${props => props.theme.primaryWidth};
    z-index:5;
`

const StyledLogoBlock = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    h1 {
        font-size: 1.5em;
    }
    p {
        font-size: .5em;
    }
`
const StyledNav = styled.nav`
    display: none;
`

const StyledNavLink = styled(NavLink)`
    margin: 8px;
    text-decoration: none;
    color: ${props => props.theme.colors.white}
`

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
`

const StyledThemeSelector = styled.div`
    padding: 24px 32px;
`

const StyledIconsAndSwitch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 0;

`

const mapStateToProps = state => ({
    theme: state.theme,
})

const mapDispatchToProps = (dispatch) => {
    return ({
        startToggleTheme: () => dispatch(startToggleTheme()),
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))