/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import 'typeface-scope-one'

const heading = css`
  font-family: 'Scope One';
  color: #212121;
  margin: 0;
  font-weight: 400;

  font-size: 2em;
  /* 2x body copy size = 32px */
  line-height: 1.25;
  /* 45px / 36px */

  @media (min-width: 43.75em) {
    font-size: 2.5em;
    /* 2.5x body copy size = 40px */
    line-height: 1.125;
  }

  @media (min-width: 56.25em) {
    font-size: 3em;
    /* 3x body copy size = 48px */
    line-height: 1.05;
    /* keep to a multiple of the 20px line height and something more appropriate for display headings */
  }
`

const Heading = props => (
  <h1 css={heading} {...props}>
    {props.children}
  </h1>
)

export default Heading
