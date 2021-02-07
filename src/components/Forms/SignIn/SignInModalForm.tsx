import Modal from 'react-modal'

export type Props = {
  modalIsOpen: boolean
  afterOpenModal: () => void
  closeModal: () => void
}

const SignInModalForm: React.FC<Props> = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  ...props
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
    >
      <div></div>
    </Modal>
  )
}

export default SignInModalForm
