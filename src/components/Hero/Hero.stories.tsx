import { Story } from '@storybook/react/types-6-0'

import Hero, { HeroProps } from './Hero'
import { mockRecipes as recipes } from '../../__mock__/data'

export default {
  title: 'Example/Hero',
  component: Hero
}

const Template: Story<HeroProps> = (args) => <Hero {...args} />

export const Main = Template.bind({})
Main.args = {
  title: recipes[0].name,
  img: recipes[0].imageUrl
}
