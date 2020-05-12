import React from 'react'
import styled from 'styled-components'

const Footer = props => (
    <StyledFooter>
        <div>{props.children}</div>
    </StyledFooter>
)

const StyledFooter = styled.div`
    background-color: ${props => props.theme.colors.white};
    padding: 16px 0px;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid ${props => props.theme.colors.grayCC};
    flex-direction: row;
    justify-content: center;
    div {
        width: ${props => props.theme.primaryWidth};
        display:flex;
        flex-direction:row;
        justify-content:flex-end;
    }
`

export default Footer