/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'gatsby'
import Background from './Background'
import SubHeading from './SubHeading'

const text = 'rgba(0,0,0,0.87)'

const card = css`
  position: relative;
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s ease-in-out;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  padding-top: 56.25%;

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

const cardContent = css`
  padding: 15px;

  h2 {
    color: #ffffff;
    font-weight: 700;
    text-decoration: none;
  }
`

const Card = props => {
  return (
    <Link css={{ textDecoration: 'none' }} {...props}>
      <Background css={card} fluid={props.image}>
        <section css={cardContent}>
          <SubHeading css={{ marginBottom: 10, marginTop: 0 }}>
            {props.children}
          </SubHeading>
        </section>
      </Background>
    </Link>
  )
}

export default Card
