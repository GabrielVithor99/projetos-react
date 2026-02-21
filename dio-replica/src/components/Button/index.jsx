import React from 'react'
import { ButtonContainer } from './styles'

export const Button = ({title, variant="primary", onClick, ...props}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} {...props}>
      {title}
    </ButtonContainer>
  )
}
