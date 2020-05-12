import React from 'react'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import { startEditPost } from '../redux/postsActions'

const EditPostPage = props => {
    return(
    <div>
        <PostForm 
            post={props.post}
            onSubmit={post => {
                props.startEditPost(props.post.id, post)
                props.history.push('/')
            }}          
        />
    </div>
)}

const mapStateToProps = (state, props) => ({
    post: state.posts.find(post => post.id === props.match.params.id),
})

const mapDispatchToProps = (dispatch, props) => ({
    startEditPost: (id, post) => dispatch(startEditPost(id, post))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage)