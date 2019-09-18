/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Menu from './Menu'
import Logo from './Logo'

const background = '#ff3900'

const header = css`
  grid-area: h;
  background-color: ${background};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: none;

  @media (min-width: 43.75em) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 100px;
  }
`
const logo = css``
const navigation = css`
  ul li {
    padding: 3px 20px;
  }
`

const Header = () => (
  <header css={header}>
    <Logo css={logo} size={1.3} />
    <Menu css={navigation} />
  </header>
)

export default Header
