import { StyledNavbar, StyledNavbarItem } from './Navbav.styles'

export type NavbarProps = {
  navItems: NavItem[]
}

export type NavItem = {
  label: string
  link: string
}

export const navbarItems: NavItem[] = [
  { label: 'Recipes', link: '' },
  { label: 'Blog', link: '' }
]

export const Navbar: React.FC<NavbarProps> = ({ navItems = navbarItems }) => {
  return (
    <StyledNavbar>
      {navItems.map((navItem) => (
        <StyledNavbarItem key={navItem.label}>{navItem.label}</StyledNavbarItem>
      ))}
    </StyledNavbar>
  )
}
