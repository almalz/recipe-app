import Link from 'next/link'
import {
  StyledNavbar,
  StyledNavbarItem,
  StyledItemContainer
} from './Navbar.styles'
import { useAuth } from '../../contexts/AuthContext'
import AuthMenu from './AuthMenu'

export type NavbarProps = {
  navItems?: NavItem[]
}

export type NavItem = {
  label: string
  link: string
}

export const navbarItems: NavItem[] = [
  { label: 'Recipes', link: '/' },
  { label: 'Blog', link: '' }
]

const Navbar: React.FC<NavbarProps> = ({ navItems = navbarItems }) => {
  const user = useAuth().user?.email

  return (
    <StyledNavbar>
      <StyledItemContainer>
        {navItems.map((navItem) => (
          <Link href={navItem.link} key={navItem.label}>
            <StyledNavbarItem>{navItem.label}</StyledNavbarItem>
          </Link>
        ))}
      </StyledItemContainer>
      <AuthMenu user={user} />
    </StyledNavbar>
  )
}

export default Navbar
