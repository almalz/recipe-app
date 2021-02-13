import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../Button/Button'
import Input from '../Input/Input'
import SegmentedControl, {
  SegmentItem
} from '../SegmentedControl/SegmentedControl'

import {
  StyledModal,
  ModalWrapper,
  FormContainer,
  InputContainer,
  ButtonContainer,
  AuthTypeContainer
} from './AuthModal.styles'

export type Props = {
  modalIsOpen: boolean
  afterOpenModal?: () => void
  closeModal?: () => void
}

const AuthModal: React.FC<Props> = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  ...props
}) => {
  type FormInputs = {
    email: string
    password: string
  }

  const { register, handleSubmit, watch, errors } = useForm<FormInputs>()
  StyledModal.setAppElement('body')
  const segments: SegmentItem[] = [{ label: 'Sign In' }, { label: 'Sign Up' }]

  const [authMethod, setAuthMethod] = useState<SegmentItem>(segments[0])

  const handleSelect = (segment: SegmentItem) => {
    setAuthMethod(segment)
  }

  const onSubmit = (data: FormInputs) => {
    console.log('data', data)
    const method = authMethod.label
  }

  console.log('errors : ', errors)

  return (
    <StyledModal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
    >
      <ModalWrapper>
        <AuthTypeContainer>
          <SegmentedControl
            name="AuthModal"
            segmentItems={segments}
            defaultItem={segments[0]}
            onSelect={handleSelect}
          />
        </AuthTypeContainer>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <Input
                name="email"
                type="email"
                label="Email"
                register={register({
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Entered value does not match email format'
                  }
                })}
                iconPath="/assets/mail.svg"
                errorMessage={errors?.email?.message}
              ></Input>

              <Input
                name="password"
                type="password"
                label="Password"
                autocomplete="current-password"
                register={register({
                  required: 'Password is required'
                })}
                iconPath="/assets/lock.svg"
                errorMessage={errors?.password?.message}
              ></Input>
            </InputContainer>
            <ButtonContainer>
              <Button
                variant="primary"
                label={authMethod.label}
                type="submit"
              ></Button>
            </ButtonContainer>
          </form>
        </FormContainer>
      </ModalWrapper>
    </StyledModal>
  )
}

export default AuthModal
