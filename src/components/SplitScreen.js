/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import 'typeface-scope-one'
import 'typeface-roboto'
import Background from '../components/Background'
import Heading from './Heading'
import SubHeading from './SubHeading'

const screen = css`
  font-family: 'Scope One';
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`

const SplitScreen = props => {
  return <Background css={screen} {...props} />
}

export default SplitScreen
