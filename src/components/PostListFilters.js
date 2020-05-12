import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter } from '../redux/filterActions'
import SearchIcon from '@material-ui/icons/Search'
import styled from 'styled-components'

const PostListFilters = props => {
    return (
        <StyledSearchBar>
            <StyledSearchIcon />
            <StyledInput
                type='text'
                className='searchbar'
                placeholder="Search"
                autoFocus
                value={props.filter.text}
                onChange={e => {
                    props.dispatch(setTextFilter(e.target.value))
                }}
            />
        </StyledSearchBar>
)}

const StyledSearchBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0px;
    padding: 0px;
    justify-content: flex-start;
`

const StyledSearchIcon = styled(SearchIcon)`
    &&& {
        color: #ffffff;
        font-size: 32px;
        opacity: .5;
        padding: 0px;
        margin: 0px;
    }
`

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  font-family: ${props => props.theme.fonts.primaryFont};
  color: #ffffff;
  font-weight: ${props => props.theme.fonts.lightFontWeight};
  font-size: 32px;
  &::placeholder {
    font-family: ${props => props.theme.fonts.primaryFont};
    color: #ffffff;
    opacity: .5;
    font-weight: ${props => props.theme.fonts.lightFontWeight};
    font-size: 32px;
  }
`;

const mapStateToProps = state => {
    return {
        filter: state.filter
    }
}

export default connect(mapStateToProps)(PostListFilters)