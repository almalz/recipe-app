import tw from 'twin.macro'
import {
  StyledInput,
  StyledLabel,
  InputIcon,
  ErrorMessage
} from './Input.styles'
import Image from 'next/image'

export type InputProps = {
  name: string
  label?: string
  type: 'text' | 'number' | 'email' | 'password' | 'tel'
  required?: boolean
  minlength?: number
  maxlength?: number
  placeholder?: string
  iconPath?: string
  autocomplete?: string
  register: any
  errorMessage: string | undefined
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type,
  required,
  maxlength,
  minlength,
  placeholder,
  iconPath,
  autocomplete,
  register,
  errorMessage
}) => {
  return (
    <div css={tw`flex -mx-3`}>
      <div css={tw`w-full px-3 mb-12`}>
        <StyledLabel htmlFor={name}>{label}</StyledLabel>
        <div css={tw`flex`}>
          {iconPath && (
            <InputIcon>
              <Image src={iconPath} width={18} height={18} />
            </InputIcon>
          )}
          <StyledInput
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            maxLength={maxlength}
            minLength={minlength}
            hasIcon={iconPath ? true : false}
            autoComplete={autocomplete}
            ref={register}
          ></StyledInput>
        </div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    </div>
  )
}

export default Input
