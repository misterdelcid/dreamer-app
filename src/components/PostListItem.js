import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { startEditPost } from '../redux/postsActions'
import styled from 'styled-components'
import moment from 'moment'
import EditRoundedIcon from '@material-ui/icons/EditRounded'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'
import IconButton from './IconButton'

const PostListItem = props => {
  const handleDelete = () => {
    props.handleModalChange()
    props.handleSetPostID(props.id)
  };

  const handleEdit = () => {
    props.history.push(`/edit/${props.id}`);
  };

    return (
      <StyledListItem first={props.first} last={props.last}>
        <div>
          <StyledPostTitle>{props.title}</StyledPostTitle>
          <StyledDescription>{props.description}</StyledDescription>
        </div>
        <StyledDateAndButtons>
          <StyledDate>{moment(props.createdAt).calendar()}</StyledDate>
          <StyledButtonGroup>
            <IconButton
              handleClick={() => 
                handleEdit()
              }
            >
              <EditRoundedIcon />
            </IconButton>
            <IconButton
              handleClick={() => 
                handleDelete()
              }
            >
              <DeleteRoundedIcon />
            </IconButton>
          </StyledButtonGroup>
        </StyledDateAndButtons>
      </StyledListItem>
    );}

const StyledListItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px 16px;
    margin: 0;
    ${props => !props.last ?
      `border-bottom: 1px solid ${props.theme.colors.grayCC};`:''}
    background-color: ${props => props.theme.colors.white};
    height: 140px;
    border-radius: ${props => 
      ((props.first && props.last) && '8px') ||
      (props.first && '8px 8px 0 0') ||
      (props.last && '0 0 8px 8px')}
    ;
    @media (min-width: 600px) {
      padding: 16px 32px;
    }
`


const StyledPostTitle = styled.h4`
    font-size: ${props => props.theme.fonts.secondaryFontSize};
    margin: 8px 0 4px 0;
    font-weight: ${props => props.theme.fonts.mediumFontWeight};
`

const StyledDate = styled.p`
    font-size: 12px;
    margin: 0 0 8px 0;
    color: ${props => props.theme.colors.gray42+'bf'};
`

const StyledDescription = styled.p`
    font-size: ${props => props.theme.fonts.secondaryFontSize};
    margin: 0 0 8px 0;
    color: ${props => props.theme.colors.gray42};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-height: 55px;
`

const StyledDateAndButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`

const StyledButtonGroup = styled.div`

`

const mapDispatchToProps = (dispatch, props) => ({
    startEditPost: (id, post) => dispatch(startEditPost(id, post)),
})

export default withRouter(connect(undefined, mapDispatchToProps)(PostListItem));