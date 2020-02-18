/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Layout from '../components/Layout'

const body = css`
  grid-column: 4 / 10;

  @media (max-width: 43.75em) {
    grid-column: 2 / 12;
  }
`

const NotFoundPage = () => (
  <Layout title="404: Not found">
    <main css={body}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </main>
  </Layout>
)

export default NotFoundPage
