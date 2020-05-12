import React from 'react'
import styled from 'styled-components'

const Input = props => (
    <StyledInput {...props}/>
)

const StyledInput = styled.input.attrs({
    type: 'text',
})`
    font-size: ${props => props.theme.fonts.primaryFontSize};
    color: ${props => props.theme.colors.gray21};
    background-color: ${props => props.theme.colors.gray42+'26'};
    border-radius: 8px;
    border: none;
    outline: ${props => props.theme.colors.primaryColor};
    padding: 16px;
    font-family: ${props => props.theme.fonts.primaryFont};
    margin: 8px 16px;
    caret-color: ${props => props.theme.colors.gray21};
    transition: ${props => props.theme.primaryTransition};
    &:hover {
        background-color: ${props => props.theme.colors.gray42+'4d'};
        transition: ${props => props.theme.primaryTransition};
    }
`

export default Input