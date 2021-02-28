import tw, { styled } from 'twin.macro'

import Layout from '../components/Layout/Layout'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const Wrapper = styled.div`
  ${tw`my-16 py-8 px-12 font-medium rounded-lg truncate ring ring-warning ring-offset-1 ring-opacity-50 bg-warning bg-opacity-80	`}
`

const Unauthorized: React.FC = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <Wrapper>
          401 unauthorized.
          <br />
          You must be authenticated to acces this page.
        </Wrapper>
      </Layout>
      <Footer />
    </>
  )
}

export default Unauthorized
