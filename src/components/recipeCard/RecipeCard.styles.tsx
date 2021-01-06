import tw, { styled } from 'twin.macro'
import Image from 'next/image'

const StyledRecipeCard = styled.div`
  ${tw`inline-block break-words w-1/6`}
`

export const CardImageContainer = styled.div`
  ${tw`rounded-xl relative  truncate`}
`

export const CardImage = styled(Image)`
  ${tw`transform transition duration-200 hover:scale-110 `}
`

export const RecipeCardLabel = styled.div`
  ${tw`text-lg font-semibold mt-2 break-words `}
`

export const TimeLabel = styled.div`
  ${tw`text-textOnS flex items-center z-10 bg-transparent absolute bottom-0 left-0 m-2`}
`

export default StyledRecipeCard
