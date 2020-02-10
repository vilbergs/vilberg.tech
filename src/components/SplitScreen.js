/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import 'typeface-scope-one'
import 'typeface-roboto'
import Background from '../components/Background'

const screen = ({ border = true }) => css`
  font-family: 'Scope One';
  padding: 15px;
  border-radius: ${border ? '15px' : 'none'};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`

const SplitScreen = props => {
  return <Background css={screen(props)} {...props} />
}

export default SplitScreen
