import { Story } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from './Button'

export default {
  title: 'Button',
  component: Button
}

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
  variant: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
  variant: 'secondary'
}

export const Outline = Template.bind({})
Outline.args = {
  label: 'Button',
  variant: 'outline'
}

export const OutlineIcon = Template.bind({})
OutlineIcon.args = {
  label: 'Button',
  variant: 'outline',
  iconPath: '/assets/cog.svg'
}
