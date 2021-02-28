import { Story } from '@storybook/react/types-6-0'

import IngredientTable, { IngredientTableProps } from './IngredientTable'
import { IngredientsOnRecipe } from '../../types/index'
import { mockRecipes as recipes } from '../../__mock__/data'

export default {
  title: 'IngredientTable',
  component: IngredientTable
}

const ingredients: IngredientsOnRecipe[] = recipes[1].IngredientsOnRecipe

const Template: Story<IngredientTableProps> = (args) => (
  <IngredientTable {...args} />
)

export const Main = Template.bind({})
Main.args = {
  ingredients
}
