import React from 'react'
import { ButtonContainer } from './styles'
import { IButtonProps } from './types'

export const Button: React.FC<IButtonProps> = ({title, variant="primary", onClick, ...props}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} {...props}>
      {title}
    </ButtonContainer>
  )
}
