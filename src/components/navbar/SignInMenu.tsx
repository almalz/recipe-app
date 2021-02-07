import { useRef } from 'react'
import tw from 'twin.macro'
import useOutsideClick from '../../hooks/useClickOutside'
import {
  StyledSigninItem,
  MenuDropdown,
  MenuDropdownItem
} from './Navbar.styles'

export type Props = {
  user?: string
  toggleDropdown?: () => void
  showSignOut: boolean
  closeDropdown: () => void
}

const SignInMenu: React.FC<Props> = ({
  user,
  showSignOut,
  toggleDropdown,
  closeDropdown
}) => {
  const ref: any = useRef<HTMLDivElement>()

  useOutsideClick(ref, closeDropdown)

  return (
    <div ref={ref}>
      <StyledSigninItem onClick={toggleDropdown}>
        {user ? user : 'Sign in'}
      </StyledSigninItem>
      <MenuDropdown>
        <MenuDropdownItem isVisible={showSignOut}>
          <button css={tw`focus:outline-none`}>Sign Out</button>
        </MenuDropdownItem>
      </MenuDropdown>
    </div>
  )
}

export default SignInMenu
