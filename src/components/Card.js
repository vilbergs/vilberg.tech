/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const text = 'rgba(0,0,0,0.87)'

const card = css`
  padding: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  a {
    color: ${text};
    text-decoration: none;
  }
`

const Card = props => {
  return (
    <div css={card} {...props}>
      {props.children}
    </div>
  )
}

export default Card
