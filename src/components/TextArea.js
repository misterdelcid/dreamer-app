import React from 'react'
import styled from 'styled-components'

const TextArea = props => (
    <StyledTextArea {...props}>

    </StyledTextArea>
)

const StyledTextArea = styled.textarea`
    font-size: ${props => props.theme.fonts.primaryFontSize};
    color: ${props => props.theme.colors.gray21};
    background-color: ${props => props.theme.colors.grayEE};
    border: 2px solid transparent; 
    border-radius: 8px;
    outline: ${props => props.theme.colors.primaryColor};
    padding: 16px;
    font-family: ${props => props.theme.fonts.primaryFont};
    margin: 8px 16px 0 16px;
    caret-color: ${props => props.theme.colors.gray21};
    transition: ${props => props.theme.primaryTransition};
    resize: none;
    height: 160px;
    &:hover, &:focus {
        border: 2px solid ${props => props.theme.colors.primaryColor};
        transition: ${props => props.theme.primaryTransition};
    }
`

export default TextArea