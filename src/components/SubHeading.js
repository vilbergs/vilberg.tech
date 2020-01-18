/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import 'typeface-scope-one'

const subHeading = css`
  font-family: Scope One;
  color: rgba(0, 0, 0, 0.7);
  margin-top: 0;
  font-weight: 400;

  font-size: 1.625em;
  /* 1.625x body copy size = 26px */
  line-height: 1.15384615;
  /* 30px / 26px */

  a {
    color: rgba(0, 0, 0, 0.7);
  }

  @media (min-width: 43.75em) {
    font-size: 2em;
    /* 2x body copy size = 32px */
    line-height: 1.25;
  }

  @media (min-width: 56.25em) {
    font-size: 2.25em;
    /* 2.25x body copy size = 36px */
    line-height: 1.25;
  }
`

const SubHeading = props => (
  <h2 {...props} css={subHeading}>
    {props.children}
  </h2>
)

export default SubHeading
