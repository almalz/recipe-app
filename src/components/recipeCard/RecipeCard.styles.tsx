import tw, { styled } from 'twin.macro'
import Image from 'next/image'

const StyledRecipeCard = styled.div`
  ${tw`inline-block break-words w-1/6`}
`

export const CardImageContainer = styled.div`
  ${tw`rounded-xl truncate`}
`

export const CardImage = styled(Image)`
  ${tw`transform transition duration-200  hover:scale-110`}
`

export const RecipeCardLabel = styled.div`
  ${tw`text-lg font-semibold mt-2 break-words`}
`

export default StyledRecipeCard
