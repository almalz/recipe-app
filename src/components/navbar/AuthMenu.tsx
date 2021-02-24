import { useState, useRef } from 'react'
import tw from 'twin.macro'
import useOutsideClick from '../../hooks/useClickOutside'
import AuthModal from '../Modals/AuthModal'
import {
  StyledSigninItem,
  MenuDropdown,
  MenuDropdownItem
} from './Navbar.styles'

import { signOut } from '../../api/firebase'

export type Props = {
  user?: string | undefined | null
}

const AuthMenu: React.FC<Props> = ({ user }) => {
  const handleSignInClick = () => {
    console.log(user)
    user ? toggleDropdown() : openModal()
  }

  const handleSignOutClick = () => {
    signOut()
  }

  const toggleDropdown = () => {
    setShowSignOut(!showSignOut)
  }

  const openModal = () => {
    setShowSignInModal(true)
  }

  const closeModal = () => {
    setShowSignInModal(false)
  }

  const closeDropdown = () => {
    setShowSignOut(false)
  }

  const [showSignInModal, setShowSignInModal] = useState<boolean>(false)
  const [showSignOut, setShowSignOut] = useState<boolean>(!showSignInModal)

  console.log('showSignInModal', showSignInModal)

  const ref: any = useRef<HTMLDivElement>()

  useOutsideClick(ref, closeDropdown)

  return (
    <div ref={ref}>
      <StyledSigninItem onClick={handleSignInClick}>
        {user ? user : 'Sign in'}
      </StyledSigninItem>
      {user ? (
        <MenuDropdown>
          <MenuDropdownItem isVisible={showSignOut}>
            <button css={tw`focus:outline-none`} onClick={handleSignOutClick}>
              Sign Out
            </button>
          </MenuDropdownItem>
        </MenuDropdown>
      ) : (
        <AuthModal modalIsOpen={showSignInModal} closeModal={closeModal} />
      )}
    </div>
  )
}

export default AuthMenu