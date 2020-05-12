import React from 'react'
import styled from 'styled-components'

const Label = props => (
    <StyledLabel {...props}>{props.children}</StyledLabel>
)

const StyledLabel = styled.label`
    margin: 16px 16px 0 16px;
    font-size: ${props => props.theme.fonts.primaryFontSize};
    color: ${props => props.theme.colors.primaryDark+80};
`

export default Label

