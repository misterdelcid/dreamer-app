import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { ModalWhiteSpace, Button } from './'

const Modal = ({modalOpen, handleModalChange, errorMessage, primaryAction}) => {
    return (
      <StyledModal modalOpen={modalOpen}>
        <ModalWhiteSpace 
          modalOpen={modalOpen} 
          handleModalChange={handleModalChange} />
        <StyledModalMessage>
          <div>
            <h4>{errorMessage.title}</h4>
            <p>{errorMessage.message}</p>
          </div>
          <StyledButtonGroup>
            <Button 
                primaryTransparent
                onClick={() => handleModalChange()}
            >
                Cancel
            </Button>
            <Button 
                primary
                onClick={primaryAction}
            >
                Delete
            </Button>
          </StyledButtonGroup>
        </StyledModalMessage>
      </StyledModal>
    );}

const StyledModal = styled.div`
    display: ${props => props.modalOpen ? 'flex': 'none'};
`

const StyledModalMessage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 200px;
    width: 85%;
    background-color: ${props => props.theme.colors.white};
    z-index: 300;
    border-radius: 8px;
    max-width: 600px;
    h4 {
        font-size: 20px;
        margin-bottom: 8px;
    }
    div {
        padding: 24px;
    }
`

const StyledButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-end;

`

export default withRouter(Modal)