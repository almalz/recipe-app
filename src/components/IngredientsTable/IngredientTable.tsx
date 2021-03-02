import { IngredientsOnRecipe } from '../../types/index'
import {
  Table,
  TableRow,
  IngredientAmount,
  IngredientName
} from './IngredientTable.styles'

export type IngredientTableProps = {
  ingredients: IngredientsOnRecipe[]
}

const IngredientTable: React.FC<IngredientTableProps> = ({ ingredients }) => {
  return (
    <Table>
      {ingredients.map((ingredient, index) => (
        <TableRow index={index} key={index}>
          <IngredientAmount></IngredientAmount>
          <IngredientName>{ingredient.ingredient?.name}</IngredientName>
        </TableRow>
      ))}
    </Table>
  )
}

export default IngredientTable
