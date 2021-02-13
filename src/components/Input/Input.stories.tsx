import { Story } from '@storybook/react/types-6-0'

import Input, { InputProps } from './Input'

export default {
  title: 'Example/Input',
  component: Input
}

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Plain = Template.bind({})
Plain.args = {
  label: 'Input',
  type: 'text'
}

export const EmailInput = Template.bind({})
EmailInput.args = {
  label: 'Input',
  type: 'email',
  iconPath: '/assets/mail.svg'
}

export const PasswordInput = Template.bind({})
PasswordInput.args = {
  label: 'Input',
  type: 'password',
  iconPath: '/assets/lock.svg'
}
