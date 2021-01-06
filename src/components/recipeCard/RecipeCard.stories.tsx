import { Story } from '@storybook/react/types-6-0'

import { RecipeCard, RecipeCardProps } from './RecipeCard'
import { mockRecipes as recipes } from './../../__mock__/data'

export default {
  title: 'Example/RecipeCard',
  component: RecipeCard
}

const Template: Story<RecipeCardProps> = (args) => <RecipeCard {...args} />

export const Main = Template.bind({})
Main.args = {
  title: recipes[0].name,
  imageUrl: recipes[0].imageUrl
}
