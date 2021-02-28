import { Story } from '@storybook/react/types-6-0'

import Navbar, { NavbarProps, navbarItems } from './Navbar'

export default {
  title: 'Navbar',
  component: Navbar
}

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />

export const Main = Template.bind({})
Main.args = {
  navItems: navbarItems
}
