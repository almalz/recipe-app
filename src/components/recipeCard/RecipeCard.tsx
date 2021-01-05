import React from 'react'

import StyledRecipeCard, {
  CardImageContainer,
  RecipeCardLabel,
  CardImage
} from './RecipeCard.styles'

export type RecipeCardProps = {
  title: string
  onClick?: () => void
  imageUrl: string
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  onClick,
  imageUrl,
  ...props
}) => {
  return (
    <StyledRecipeCard {...props}>
      <CardImageContainer>
        <CardImage src={imageUrl} width={200} height={800} />
      </CardImageContainer>
      <RecipeCardLabel>{title}</RecipeCardLabel>
    </StyledRecipeCard>
  )
}
