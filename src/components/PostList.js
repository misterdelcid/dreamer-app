import React, { useState } from 'react'
import { connect } from 'react-redux'
import { PostListItem, Modal } from './'
import { startRemovePost } from "../redux/postsActions";
import getVisiblePosts from '../selector/postsSelector'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'


const PostList = (props) => {
    const noPostsMessage = props => {
        const postsLength = props.posts.length
        const path = props.location.pathname
        const message = {
            postPage: 'No posts yet. Click Add Post to get started!',
            searchPage: 'No matches found. Try searching by another keyword',
        }
        if (postsLength === 0 && (path === '/' || path === '')) return message.postPage
        if (postsLength === 0 && path === '/search') return message.searchPage
        return false
    }

    const errorMessage = {
      title: "Just a Heads Up!",
      message:
        "This post will be permanently deleted. Would you still like to move forward?",
    }

    const [modalOpen, setModalOpen] = useState(false)

    const handleModalChange = () => {
      setModalOpen(!modalOpen)
    }

    const [postID, setPostID] = useState(null)

    const handleSetPostID = id => {
      setPostID(id)
    }

    const handleDelete = props => {
      props.startRemovePost({ id: postID })
      setModalOpen(!modalOpen)
    }

    const postsLength = props.posts.length;

    return (
      <>
        {noPostsMessage(props) ? (
          <StyledErrorMessage>{noPostsMessage(props)}</StyledErrorMessage>
        ) : (
          <>
            <Modal
              modalOpen={modalOpen}
              handleModalChange={handleModalChange}
              errorMessage={errorMessage}
              primaryAction={() => handleDelete(props)}
            />
            <StyledPostList>
              {props.posts.map((post, index) => {
                return (
                <PostListItem
                  key={post.id}
                  first={index === 0}
                  last={index === (postsLength-1)}
                  {...post}
                  handleModalChange={handleModalChange}
                  handleSetPostID={handleSetPostID}
                />
              )}
              )}
            </StyledPostList>
          </>
        )}
      </>
    );}

const StyledPostList = styled.div`
    border: 1px solid ${props => props.theme.colors.grayCC};
    margin: 24px 0 0 0;
    border-radius: 8px;
`

const StyledErrorMessage = styled.div`
    font-family: ${props => props.theme.fonts.primaryFont};
    font-size: ${props => props.theme.fonts.secondaryFontSize};
    text-align: center;
    color: ${props => props.theme.colors.gray61};
    margin: 24px;
`

const mapDispatchToProps = (dispatch, props) => ({
  startRemovePost: (post) => dispatch(startRemovePost(post)),
});

const mapStateToProps = (state, props) => {
    return {
        posts: props.location.pathname === '/search' ? getVisiblePosts(state.posts, state.filter): state.posts,
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList));