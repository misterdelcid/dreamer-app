import React from 'react'
import styled from 'styled-components'

const Label = props => (
    <StyledLabel {...props}>{props.children}</StyledLabel>
)

const StyledLabel = styled.label`
    margin: 16px 16px 0px 16px;
    font-size: ${props => props.theme.fonts.secondaryFontSize};
    color: ${props => props.theme.colors.gray42+'bf'};
`

export default Label

