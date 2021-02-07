import { useState, useEffect } from 'react'
import {
  StyledNavbar,
  StyledNavbarItem,
  StyledItemContainer
} from './Navbar.styles'
import SignInMenu from './SignInMenu'

export type NavbarProps = {
  navItems?: NavItem[]
}

export type NavItem = {
  label: string
  link: string
}

export const navbarItems: NavItem[] = [
  { label: 'Recipes', link: '' },
  { label: 'Blog', link: '' }
]

const Navbar: React.FC<NavbarProps> = ({ navItems = navbarItems }) => {
  const isLoggedIn = 0
  const user: string = 'Alex'
  const toggleDropdown = () => {
    setShowSignOut(!showSignOut)
  }

  const closeDropdown = () => {
    setShowSignOut(false)
  }

  const [showSignOut, setShowSignOut] = useState<boolean>(true)

  useEffect(() => {
    console.log('showSignOut : ', showSignOut)
    console.log('isLoggedIn : ', isLoggedIn)

    // setShowSignOut(isLoggedIn)
  }, [showSignOut])

  return (
    <StyledNavbar>
      <StyledItemContainer>
        {navItems.map((navItem) => (
          <StyledNavbarItem key={navItem.label}>
            {navItem.label}
          </StyledNavbarItem>
        ))}
      </StyledItemContainer>
      <SignInMenu
        user={user}
        showSignOut={showSignOut}
        toggleDropdown={toggleDropdown}
        closeDropdown={closeDropdown}
      />
    </StyledNavbar>
  )
}

export default Navbar
