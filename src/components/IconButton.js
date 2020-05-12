import React from 'react'
import {IconButton as MaterialIconButton} from '@material-ui/core/'
import styled from 'styled-components'

const IconButton = props => (
    <StyledIconButton onClick={props.handleClick}>{props.children}</StyledIconButton>
)

const StyledIconButton = styled(MaterialIconButton)`
    &&& {
        color: ${props => props.theme.colors.gray21};
    }
`

export default IconButton