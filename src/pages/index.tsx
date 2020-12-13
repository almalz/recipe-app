import Link from 'next/link'
import Layout from '../components/Layout'
import { Button } from '../components/button/Button'

const IndexPage = () => (
  <Layout>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <span className="text-blue-800">TOTO</span>
      <Button label="hello"></Button>
    </p>
  </Layout>
)

export default IndexPage
