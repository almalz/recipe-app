import { GetServerSideProps } from 'next'
import Link from 'next/link'

import Layout from '../../../components/Layout/Layout'
import Footer from '../../../components/Footer/Footer'
import Navbar from '../../../components/Navbar/Navbar'
import RecipeCard from '../../../components/RecipeCard/RecipeCard'
import {
  RecipeCardContainer,
  RecipeCardGrid,
  RecipeCardWrapper
} from '../../index.styles'
import { Heading1 } from '../../../components/Headings/Headings'

import { Recipe } from './../../../types'

import { getRecipes } from '../../../api'

type PageProps = {
  recipes: Recipe[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const recipes: Recipe[] = await getRecipes()
  return {
    props: { recipes }
  }
}

const IndexPage: React.FC<PageProps> = ({ recipes }) => {
  return (
    <>
      <Layout>
        <Navbar />
        <Heading1>My recipes</Heading1>
        <RecipeCardContainer>
          <RecipeCardGrid>
            {recipes.map((recipe) => (
              <Link href={`/recipe/${recipe.id}`}>
                <RecipeCardWrapper key={recipe.id}>
                  <RecipeCard title={recipe.name} imageUrl={recipe.imageUrl} />
                </RecipeCardWrapper>
              </Link>
            ))}
          </RecipeCardGrid>
        </RecipeCardContainer>
      </Layout>
      <Footer />
    </>
  )
}

export default IndexPage
