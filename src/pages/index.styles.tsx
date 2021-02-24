import tw, { styled } from 'twin.macro'

export const RecipeCardContainer = styled.div`
  ${tw`mt-16 w-full`}
`

export const RecipeCardGrid = styled.div`
  ${tw`grid gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2`}
`

export const RecipeCardWrapper = styled.div`
  ${tw`m-2 overflow-hidden cursor-pointer	`}
`
