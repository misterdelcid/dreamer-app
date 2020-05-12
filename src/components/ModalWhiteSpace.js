import React from 'react'
import styled from 'styled-components'
import { IconButton } from './'
import CloseRoundedIcon from "@material-ui/icons/CloseRounded"

const ModalWhiteSpace = ({modalOpen, handleModalChange}) => {
  return (
    <StyledModalWhiteSpace>
      <div
        className={`modal ${modalOpen ? "open" : ""}`}
        modalOpen={modalOpen}
        onClick={handleModalChange}
      >
        <IconButton handleClick={handleModalChange}>
          <StyledCloseButton />
        </IconButton>
      </div>
    </StyledModalWhiteSpace>
  );}

const StyledModalWhiteSpace = styled.div`
  .modal {
    position: fixed;
    z-index: 200;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: black;
    margin: 0px;
    padding: 0px;
    visibility: hidden;
    opacity: 0;
    transition: opacity .25s ease;
  }
  .modal.open {
    visibility: visible;
    opacity: .85;
  }
`

const StyledCloseButton = styled(CloseRoundedIcon)`
  &&& {
    color: #ffffff;
  }
`

export default ModalWhiteSpace