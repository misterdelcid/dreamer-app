import React from 'react'
import { connect } from 'react-redux'
import { startAddPost } from '../redux/postsActions'
import PostForm from './PostForm'

const AddPostPage = (props) => {
    return (
        <div>
            <PostForm
                onSubmit={post => {
                    props.startAddPost(post);
                    props.history.push('/')
                }}
                onCancel={e => e.preventdefault()}
            />
        </div>
)}

const mapDispatchToProps = dispatch => ({
    startAddPost: post => dispatch(startAddPost(post))
})

export default connect(undefined, mapDispatchToProps)(AddPostPage)