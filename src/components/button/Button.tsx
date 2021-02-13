import Image from 'next/image'
import { LoadingOutlined } from '@ant-design/icons'

import StyledButton, { ButtonWrapper } from './Button.styles'

export type ButtonProps = {
  disabled?: boolean
  label: string
  onClick?: () => void
  variant: 'primary' | 'secondary' | 'outline'
  iconPath?: string
  isLoading?: boolean
  type: 'button' | 'submit' | 'reset' | undefined
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  label,
  onClick,
  variant,
  iconPath,
  isLoading = false,
  type = 'button',
  ...props
}) => {
  return (
    <StyledButton variant={variant} {...props} disabled={disabled} type={type}>
      <ButtonWrapper>
        {iconPath && !isLoading && (
          <Image src={iconPath} width={14} height={14} />
        )}
        {isLoading && <LoadingOutlined spin />}
        <span>{label}</span>
      </ButtonWrapper>
    </StyledButton>
  )
}

export default Button
