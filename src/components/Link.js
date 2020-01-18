/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link as GatsbyLink } from 'gatsby'

const link = css`
  font-family: Roboto;
`

const Link = props => <GatsbyLink css={link} {...props} />

export default Link
