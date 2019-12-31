/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Img from 'gatsby-image'

const text = 'rgba(0,0,0,0.87)'

const card = css`
  display: inline-flex;
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  a {
    color: ${text};
    text-decoration: none;
  }
`

const cardImage = css`
  width: 100%;
  border-radius: 15px 0 0 15px;

  img {
    height: 100%;
  }
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

const Thumbnail = props => {
  return (
    <div css={card} {...props}>
      <div css={cardImage}>
        <Img fluid={props.image.fluid} />
      </div>
      <div>
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
    </div>
  )
}

export default Thumbnail
