import tw, { styled } from 'twin.macro'
import Image from 'next/image'

const StyledRecipeCard = styled.div`
  ${tw`inline-block break-words overflow-hidden w-full`}
`

export const CardImageContainer = styled.div`
  ${tw`rounded-xl relative truncate w-full h-80`}
`

export const CardImage = styled(Image)`
  ${tw`transform transition duration-200 hover:scale-110`}
`

export const RecipeCardLabel = styled.div`
  ${tw`text-lg font-semibold mt-2 break-words `}
`

export const TimeLabel = styled.div`
  ${tw`text-textOnS flex items-center bg-transparent absolute bottom-0 left-0 m-2`}
`

export default StyledRecipeCard
