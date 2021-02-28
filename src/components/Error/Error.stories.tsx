import { Story } from '@storybook/react/types-6-0'

import Error, { ErrorProps } from './Error'

export default {
  title: 'Error',
  component: Error
}

const errorSample = {
  errorTitle: 'This is the title of the error',
  errorMessage: 'This is the title of the message'
}

const Template: Story<ErrorProps> = (args) => <Error {...args} />

export const Main = Template.bind({})
Main.args = {
  errorTitle: errorSample.errorTitle,
  errorMessage: errorSample.errorMessage
}
