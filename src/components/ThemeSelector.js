import React from 'react'
import { connect } from 'react-redux'
import { startToggleTheme } from "../redux/themeActions";
import styled from 'styled-components'
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import Switch from "@material-ui/core/Switch";


const ThemeSelector = (props) => {
  console.log(props)
  return (
  <StyledThemeSelector drawer={props.drawer} navbar={props.navbar}>
    {props.label ? 'Mode:': ''}
    <StyledIconsAndSwitch>
      <WbSunnyIcon />
      <Switch
        checked={props.theme === "dark"}
        onChange={() => props.startToggleTheme()}
      />
      <NightsStayIcon />
    </StyledIconsAndSwitch>
  </StyledThemeSelector>
)};

const StyledThemeSelector = styled.div`
  padding: ${props => 
    (props.navbar && '0 0 0 16px') ||
    (props.drawer && '24px 32px') ||
    '0'};
`;

const StyledIconsAndSwitch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const mapStateToProps = (state) => ({
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) => {
  return {
    startToggleTheme: () => dispatch(startToggleTheme()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSelector);

