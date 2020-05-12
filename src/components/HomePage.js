import React from 'react'
import { PostList, Footer, Button, Modal } from './'

const HomePage = props => (
        <>
                <PostList props={props} />
                <Footer>
                        <Button primary onClick={e => props.history.push('/add')}>Add Post</Button>
                </Footer>
        </>
)

export default HomePage