/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Img from 'gatsby-image'
import Background from '../components/Background'

const text = 'rgba(0,0,0,0.87)'

const card = css`
  position: relative;
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s ease-in-out;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  a {
    color: ${text};
    text-decoration: none;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 15px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    transform: scale(1.005);
  }

  &:hover::after {
    opacity: 1;
  }
`

const cardImage = css`
  border-radius: 15px 15px 0 0;
`

const cardContent = css`
  padding: 15px;
`
const cardActions = css`
  padding: 0 15px 15px 15px;

  p {
    margin: 0;
  }
`

const Card = props => {
  return (
    <div css={card} {...props}>
      {props.image ? <Img css={cardImage} fluid={props.image} /> : null}
      <section css={cardContent}>
        <h3 css={{ color: '#212121', marginBottom: 10, marginTop: 0 }}>
          Vilberg
        </h3>
        <p>
          Ea et velit do commodo laboris anim sunt. Laborum aliqua aliqua
          commodo anim dolore irure velit ad aute quis voluptate voluptate
          nostrud...
        </p>
      </section>
      <section css={cardActions}>
        <p>Read More</p>
      </section>
    </div>
  )
}

export default Card
