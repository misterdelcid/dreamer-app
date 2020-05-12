import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { PostListFilters } from './'

const TitleBar = props => {
    const pageTitle = () => {
        const path = props.location.pathname
        if (path === '/' || '') return 'Posts'
        if (path === '/add') return 'Add Post'
        if (path.includes('/edit')) return 'Edit Post'
        return 'Uh-oh'
    }
    return(
    <StyledTitleBar>
        <div className='container'>
            {props.location.pathname === '/search' ?
                <PostListFilters />:
                <h2>{pageTitle()}</h2>
            }
        </div>
    </StyledTitleBar>
)}

const StyledTitleBar = styled.div`
    height: 80px;
    background-image: linear-gradient(to right bottom, ${props => props.theme.colors.primaryColor}, ${props => props.theme.colors.secondaryColor});
    display: flex;
    align-items: center;
    .container {
        width: ${props => props.theme.primaryWidth};
        margin: 0 auto;
    }
    h2 {
        color: #ffffff;
        font-weight: 300;
        font-size: 32px;
    }
`

export default withRouter(TitleBar)