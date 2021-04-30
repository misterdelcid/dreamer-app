import React from 'react'
import styled from 'styled-components'

const Input = props => (
    <StyledInput {...props}/>
)

const StyledInput = styled.input.attrs({
    type: 'text',
})` font-size: ${props => props.theme.fonts.primaryFontSize};
    border-radius: 8px;
    border: none;
    border: 2px solid transparent;
    padding: 16px;
    margin: 8px 16px;
    color: ${props => props.theme.colors.gray21};
    background-color: ${props => props.theme.colors.grayEE};
    font-family: ${props => props.theme.fonts.primaryFont};
    caret-color: ${props => props.theme.colors.gray21};
    transition: ${props => props.theme.primaryTransition};
    &:hover, &:focus {
        border: 2px solid ${props => props.theme.colors.primaryColor};
        transition: ${props => props.theme.primaryTransition};
    }
`

export default Input