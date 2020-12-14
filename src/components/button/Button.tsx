import React from 'react'

import StyledButton from './Button.styles'

export interface ButtonProps {
  disabled?: boolean
  label: string
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */

export const Button: React.FC<ButtonProps> = ({
  disabled,
  label,
  ...props
}) => {
  return (
    <StyledButton type="button" {...props}>
      {label}
    </StyledButton>
  )
}
