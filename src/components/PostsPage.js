import React from 'react'
import { PostList, Footer, Button } from '.'

const PostsPage = props => (
        <>
                <PostList props={props} />
                <Footer>
                        <Button primary onClick={e => props.history.push('/add')}>Add Post</Button>
                </Footer>
        </>
)

export default PostsPage