import React from 'react'
import Image from 'next/image'

import StyledButton, { ButtonWrapper, StyledLoader } from './Button.styles'

export type ButtonProps = {
  disabled?: boolean
  label: string
  onClick?: () => void
  variant: 'primary' | 'secondary' | 'outline'
  iconPath?: string
  isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  disabled,
  label,
  onClick,
  variant,
  iconPath,
  isLoading = false,
  ...props
}) => {
  return (
    <StyledButton variant={variant} {...props}>
      <ButtonWrapper>
        {iconPath && !isLoading && (
          <Image
            src={iconPath}
            width={14}
            height={14}
            // css={{ marginRight: '- 3px' }}
          />
        )}
        {isLoading && <StyledLoader />}
        <span>{label}</span>
      </ButtonWrapper>
    </StyledButton>
  )
}
