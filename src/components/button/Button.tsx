import React from 'react'

import StyledButton from './Button.styles'

export type ButtonProps = {
  disabled?: boolean
  label: string
  onClick?: () => void
  variant: 'primary' | 'secondary'
  icon?: File
}

export const Button: React.FC<ButtonProps> = ({
  disabled,
  label,
  onClick,
  variant,
  icon,
  ...props
}) => {
  return (
    <StyledButton variant={variant} {...props}>
      {label}
    </StyledButton>
  )
}
