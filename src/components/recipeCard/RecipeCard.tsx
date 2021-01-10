import Image from 'next/image'
import tw, { css } from 'twin.macro'

import StyledRecipeCard, {
  CardImageContainer,
  RecipeCardLabel,
  TimeLabel,
  CardImage
} from './RecipeCard.styles'

export type RecipeCardProps = {
  title: string
  imageUrl: string | null | undefined
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, imageUrl }) => {
  return (
    <StyledRecipeCard>
      <CardImageContainer>
        <Image
          src={`data:image/jpeg;base64,${imageUrl}`}
          alt={title}
          layout="fill"
          objectFit="cover"
          css={tw`transform transition duration-200 hover:scale-110`}
        />

        <TimeLabel>
          <Image src="/assets/clock.svg" width={16} height={16} />
          <p className="ml-2">30 min</p>
        </TimeLabel>
      </CardImageContainer>
      <RecipeCardLabel>{title}</RecipeCardLabel>
    </StyledRecipeCard>
  )
}

export default RecipeCard
