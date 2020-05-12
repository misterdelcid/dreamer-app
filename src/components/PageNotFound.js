import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const PageNotFound = () => (
    <StyledPageNotFound>
        <h3>Something went wrong</h3>
        <p>The page that you're looking for does not exist. Let's try going <NavLink to='/'>home</NavLink></p>
    </StyledPageNotFound>
)

const StyledPageNotFound = styled.div`
    margin: 24px 0;
    h3 {
        margin-bottom: 8px;
    }

`

export default PageNotFound