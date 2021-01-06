import Image from 'next/image'

import StyledRecipeCard, {
  CardImageContainer,
  RecipeCardLabel,
  TimeLabel,
  CardImage
} from './RecipeCard.styles'

export type RecipeCardProps = {
  title: string
  imageUrl: string
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ title, imageUrl }) => {
  return (
    <StyledRecipeCard>
      <CardImageContainer>
        <CardImage
          src={imageUrl}
          width={200}
          height={800}
          quality={100}
          alt="Card image"
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
