import React from 'react'
import styled from 'styled-components'

const TextArea = props => (
    <StyledTextArea {...props}>

    </StyledTextArea>
)

const StyledTextArea = styled.textarea`
    font-size: ${props => props.theme.fonts.primaryFontSize};
    color: ${props => props.theme.colors.gray21};
    background-color: ${props => props.theme.colors.gray42 + '26'};
    border-radius: 8px;
    border: none;
    outline: ${props => props.theme.colors.primaryColor};
    padding: 16px;
    font-family: ${props => props.theme.fonts.primaryFont};
    margin: 8px 16px 0 16px;
    caret-color: ${props => props.theme.colors.gray21};
    transition: ${props => props.theme.primaryTransition};
    resize: none;
    height: 296px;
    &:hover {
        background-color: ${props => props.theme.colors.gray42 + '4d'};
        transition: ${props => props.theme.primaryTransition};
    }
`

export default TextArea