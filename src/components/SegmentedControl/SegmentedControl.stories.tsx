import { Story } from '@storybook/react/types-6-0'

import SegmentedControl, {
  SegmentedControlProps,
  SegmentItem
} from './SegmentedControl'

export default {
  title: 'SegmentedControl',
  component: SegmentedControl
}

const Template: Story<SegmentedControlProps> = (args) => (
  <SegmentedControl {...args} />
)

const mockItem = (label: string) => {
  const item: SegmentItem = { label }
  return item
}

const mockItems: SegmentItem[] = [
  mockItem('One'),
  mockItem('Two'),
  mockItem('Three'),
  mockItem('Four')
]

export const Primary = Template.bind({})
Primary.args = {
  name: 'storybook',
  segmentItems: mockItems,
  defaultItem: mockItem('Three')
}
