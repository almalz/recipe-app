import tw, { styled } from 'twin.macro'

import Layout from '../components/Layout/Layout'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const Wrapper = styled.div`
  ${tw`my-16 py-8 px-12 font-medium rounded-lg overflow-hidden ring ring-warning ring-opacity-50 bg-warning bg-opacity-80	`}
`

const NotFound: React.FC = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <Wrapper>
          404 Not Found.
          <br />
          We did not found any page or recipe for this URL.
        </Wrapper>
      </Layout>
      <Footer />
    </>
  )
}

export default NotFound
