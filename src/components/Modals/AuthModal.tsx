import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../Button/Button'
import Input from '../Input/Input'
import Error from '../Error/Error'

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

import firebase, { createUser, signIn } from '../../api/firebase'

export type Props = {
  modalIsOpen: boolean
  closeModal: () => void
}

const AuthModal: React.FC<Props> = ({ modalIsOpen, closeModal }) => {
  type FormInputs = {
    email: string
    password: string
  }

  const { register, handleSubmit, errors } = useForm<FormInputs>()
  StyledModal.setAppElement('body')
  const segments: SegmentItem[] = [{ label: 'Sign In' }, { label: 'Sign Up' }]

  const [authMethod, setAuthMethod] = useState<SegmentItem>(segments[0])
  const [error, setError] = useState<firebase.FirebaseError | null>(null)

  const resetError = () => {
    setError(null)
  }

  const handleSelect = (segment: SegmentItem) => {
    setAuthMethod(segment)
    resetError()
  }

  const onSubmit = async (data: FormInputs) => {
    resetError()
    switch (authMethod.label) {
      case segments[0].label: //Sign In
        try {
          await signIn(data.email, data.password)
          closeModal()
          console.log('uncaught')
        } catch (error) {
          console.log('catch', error)
          setError(error)
        }
        break

      case segments[1].label: //Sign Up
        try {
          await createUser(data.email, data.password)
          closeModal()
        } catch (error) {
          setError(error)
        }
        break

      default:
        console.info('Could not call any authentification function.')
    }
  }

  return (
    <StyledModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      onAfterClose={resetError}
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
                autocomplete="email"
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
              {error && (
                <Error
                  errorTitle={`${error.code} - ${error.name}`}
                  errorMessage={error.message}
                />
              )}
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
