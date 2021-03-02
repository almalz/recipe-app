import { GetServerSideProps } from 'next'
import Footer from '../../../components/Footer/Footer'
import Layout from '../../../components/Layout/Layout'
import Navbar from '../../../components/Navbar/Navbar'
import Hero from '../../../components/Hero/Hero'
import IngredientTable from '../../../components/IngredientsTable/IngredientTable'

import {
  PageWrapper,
  TimeText,
  ContentWrapper,
  LeftPanel,
  RightPanel
} from './index.styles'
import { Recipe, IngredientsOnRecipe } from '../../../types'
import { getOneRecipeById } from '../../../api'

type PageProps = {
  recipe: Recipe
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const recipe: Recipe = await getOneRecipeById(params?.id as string)
  return {
    props: { recipe }
  }
}

const RecipePage: React.FC<PageProps> = ({ recipe }) => {
  return (
    <>
      <Layout>
        <Navbar />
        <PageWrapper>
          <Hero title={recipe.name} img={recipe.imageUrl as string} />
          <TimeText> Preperation time: {recipe.prepTime} min </TimeText>
          <TimeText> Cooking time: {recipe.cookingTime} min </TimeText>
          <ContentWrapper>
            <LeftPanel>
              <IngredientTable
                ingredients={
                  recipe.IngredientsOnRecipe as IngredientsOnRecipe[]
                }
              ></IngredientTable>
            </LeftPanel>
            <RightPanel></RightPanel>
          </ContentWrapper>
        </PageWrapper>
      </Layout>
      <Footer />
    </>
  )
}

export default RecipePage
