export type Recipe = {
  id: number
  name: string
  prepTime?: number
  cookingTime?: number
  instructionId?: number | null
  imageUrl?: string | null
  sourceUrl?: string | null
  IngredientsOnRecipe: IngredientsOnRecipe[] | null
}

export type IngredientsOnRecipe = {
  id: number
  recipeId: number
  ingredientId: number
  base_amout?: number | null
  unitId?: number | null
  ingredient: Ingredient | null
}

export type Ingredient = {
  id: number
  name: string
  alternativeingredientId?: Ingredient | null
}

// export type Recipe = {
//   id: number
//   name: string
//   prepTime?: number
//   cookingTime?: number
//   instructionId?: number | null | undefined
//   imageUrl?: string | null | undefined
//   sourceUrl?: string | null | undefined
//   IngredientsOnRecipe: {
//     id: number
//     recipeId: number
//     ingredientId: number
//     base_amout?: number | null | undefined
//     unitId?: number | null | undefined
//     ingredient: {
//       id: number
//       name: string
//       alternativeingredientId?: any
//     }
//   }
// }
