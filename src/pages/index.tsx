import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <span className="text-blue-800">TOTO</span>
    </p>
  </Layout>
)

export default IndexPage
