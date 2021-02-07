import { GetServerSideProps } from 'next'

import Layout from '../components/Layout/Layout'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import RecipeCard from '../components/RecipeCard/RecipeCard'
import {
  RecipeCardContainer,
  RecipeCardGrid,
  RecipeCardWrapper
} from './index.styles'
import { Recipe } from './../types'

import { getRecipes } from '../api'

type PageProps = {
  recipes: Recipe[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const recipes: Recipe[] = await getRecipes()
  console.log(recipes)
  return {
    props: { recipes }
  }
}

const IndexPage: React.FC<PageProps> = ({ recipes }) => {
  // const [recipes, setRecipes] = useState({})

  // useEffect(() => {
  // }, [])

  return (
    <>
      <Layout>
        <Navbar />
        <RecipeCardContainer>
          <RecipeCardGrid>
            {recipes.map((recipe) => (
              <RecipeCardWrapper key={recipe.id}>
                <RecipeCard title={recipe.name} imageUrl={recipe.imageUrl} />
              </RecipeCardWrapper>
            ))}
          </RecipeCardGrid>
        </RecipeCardContainer>
      </Layout>
      <Footer />
    </>
  )
}

export default IndexPage
