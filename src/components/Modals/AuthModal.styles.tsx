import tw, { styled } from 'twin.macro'
import Modal from 'react-modal'

export const StyledModal = styled(Modal)`
  ${tw`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-max p-8 w-1/3 rounded-xl border-2 border-secondaryLight z-50 bg-background outline-none`}
`

export const ModalWrapper = styled.div`
  ${tw`flex flex-col justify-center`}
`
export const AuthTypeContainer = styled.div`
  ${tw`flex justify-center py-4`}
`
export const FormContainer = styled.div`
  ${tw`py-4`}
`

export const InputContainer = styled.div`
  ${tw``}
`

export const ButtonContainer = styled.div`
  ${tw``}
`
