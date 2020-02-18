/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Layout from '../components/Layout'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'

const body = css`
  grid-column: 4 / 10;

  height: calc(100vh - 350px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 10em;
  }

  @media (max-width: 43.75em) {
    grid-column: 2 / 12;
  }
`

const NotFoundPage = () => (
  <Layout title="404: Not found">
    <main css={body}>
      <Heading>404</Heading>
      <SubHeading>Oh no! We're lost!</SubHeading>
    </main>
  </Layout>
)

export default NotFoundPage
