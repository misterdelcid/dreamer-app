import React, { useState } from 'react'
import { withRouter } from 'react-router-dom' 
import { Button, Input, Label, TextArea, Footer, Modal } from './'
import styled from 'styled-components'

const PostForm = (props) => {
    const [state, setState] = useState({
        title: props.post ? props.post.title: '',
        description: props.post ? props.post.description: '',
        createdAt: props.post ? props.post.createdAt: null,
        error: props.post ? props.post.error: null,
    })

    const errorMessage = {
      title: "Just a Heads Up!",
      message:
        "Any unsaved changes will be permanently deleted. Would you still like to move forward?",
    }

    const [modalOpen, setModalOpen] = useState(false)

    const handleModalChange = () => {
        setModalOpen(!modalOpen);
    }

    const onTitleChange = e => {
        const title = e.target.value
        setState({...state, title})
    }

    const onDescriptionChange = e => {
        const description = e.target.value
        setState({...state, description})
    }

    const onCancel = e => {
        e.preventDefault()
        if (state.title || state.description) {
            handleModalChange()
        } else {
            props.history.push('/posts')
        }
    }

    const onSubmit = e => {
        e.preventDefault()
        if (!state.title || !state.description) {
            setState({ ...state, error: 'Please add a title and description'})
        } else {
            setState({...state, error:''})
            props.onSubmit({
                title: state.title,
                description: state.description,
                createdAt: new Date().getTime(),
            })
        }
    }
    
    return (
      <>
        <Modal
          modalOpen={modalOpen}
          handleModalChange={handleModalChange}
          errorMessage={errorMessage}
          primaryAction={() => props.history.push("/")}
        />
        <div className="post-form">
          <StyledForm onSubmit={onSubmit}>
            <Label name="title">Title</Label>
            <Input
              placeholder="Give your dream a title..."
              value={state.title}
              onChange={onTitleChange}
            />
            <Label name="description">Description</Label>
            <TextArea
              placeholder="Describe what you remember from your dream..."
              value={state.description}
              onChange={onDescriptionChange}
            ></TextArea>
            <Footer>
              <Button primaryTransparent onClick={onCancel}>
                Cancel
              </Button>
              <Button
                primary
                disabled={!(state.title && state.description)}
                onClick={onSubmit}
              >
                Save
              </Button>
            </Footer>
          </StyledForm>
        </div>
      </>
    );
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding-bottom: 16px;
    margin: 24px auto 86px auto;
    background-color: ${props => props.theme.colors.white};
`

export default withRouter(PostForm)