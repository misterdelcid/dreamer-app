import React from 'react'
import styled from 'styled-components'
import {Button as MaterialButton} from '@material-ui/core'

const Button = props => (
    <StyledButton {...props}>{props.children}</StyledButton>
)

const StyledButton = styled(MaterialButton)`
    &&& {
        background-color: ${(props) => props.theme.colors.primaryColor};
        color: #fff;
        border-radius: 24px;
        margin-left: 8px;
        transition: ${(props) => props.theme.primaryTransition};
        background-color: ${(props) =>
          (props.disabled && props.theme.colors.gray9e) ||
          (props.primary && props.theme.colors.primaryColor) ||
          (props.secondary && props.theme.colors.secondaryColor) ||
          (props.primaryTransparent && "transparent") ||
          props.theme.colors.gray9e};
        color: ${(props) =>
          ((props.primary || props.secondary) && "#ffffff") ||
          props.theme.colors.gray21};
        padding: ${(props) => (props.large && "8px 32px") || "4px 32px"};
        &:hover {
            background-color: ${(props) =>
              (props.primary && props.theme.colors.primaryColorDark) ||
              (props.secondary &&
                props.theme.colors.secondaryColorDark) ||
              (props.primaryTransparent && props.theme.colors.grayd9) ||
              props.theme.colors.gray78};
            transition: ${(props) => props.theme.primaryTransition};
    }
`;



export default Button