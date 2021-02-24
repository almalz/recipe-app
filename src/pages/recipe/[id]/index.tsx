import { GetServerSideProps } from 'next'
import Footer from '../../../components/Footer/Footer'
import Layout from '../../../components/Layout/Layout'
import Navbar from '../../../components/Navbar/Navbar'
import Hero from '../../../components/Hero/Hero'

import { PageWrapper } from './index.styles'
import { Recipe } from '../../../types'
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
        </PageWrapper>
      </Layout>
      <Footer />
    </>
  )
}

export default RecipePage
