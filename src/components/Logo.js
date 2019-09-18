/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import 'typeface-bungee-shade'

const logo = size => css`
  font-family: Bungee Shade;
  font-size: ${size}em;
  color: rgb(0, 0, 0, 0.87);
  margin: 0;

  user-select: none;

  @media (min-width: 43.75em) {
    font-size: ${size * 2}em;
    /* 2.5x body copy size = 40px */
    line-height: 1.125;
  }
`

const Logo = props => {
  return (
    <h1 css={logo(props.size)} {...props}>
      Vilberg
    </h1>
  )
}

export default Logo
