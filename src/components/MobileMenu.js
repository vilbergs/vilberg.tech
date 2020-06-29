/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { LinkedIn, Instagram, GitHub } from './Social'
import { tabletPortrait, phone } from '../utils/breakpoints'
import { useState } from 'react'

const navigation = css`
  grid-column: 2 / 12;
  grid-row: 1;
  z-index: 16;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 100px;

  ${tabletPortrait} {
    grid-column: 2 / 12;
  }

  h2 {
    margin: 0;
  }

  a {
    font-family: Scope One;
    text-decoration: none;
  }

  .navigation-heading,
  .navigation-menu a {
    color: inherit;
  }

  .navigation-heading {
    font-size: 1.3em;
  }
`

const navSocialMedia = css`
  ${phone} {
    display: none;
  }
`

const MobileMenu = ({ color = 'black', ...props }) => {
  const [isToggledOn, setToggle] = useState(false)
  const toggle = () => setToggle(!isToggledOn)

  return (
    <nav css={navigation} {...props}>
      <Link to="/" className="navigation-heading">
        Vilberg
      </Link>

      <div className="mobile-nav">
        <button
          onClick={toggle}
          aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}
          css={css`
            width: 24px;
            z-index: 30;
            top: -5px;
            position: relative;
            background: transparent;
            border: none;
            :hover:not(.touch),
            :focus {
              background: transparent;
              border: none;
              outline: none;
            }
          `}
        >
          <div
            css={css`
              width: 24px;
              height: 2px;
              background: ${color};
              position: absolute;
              left: 0;
              ${isToggledOn
                ? 'background: transparent'
                : `background: ${color}`};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
              ::before {
                content: '';
                top: -8px;
                width: 24px;
                height: 2px;
                background: ${isToggledOn ? 'white' : `${color}`};
                position: absolute;
                left: 0;
                ${isToggledOn
                  ? 'transform: rotate(45deg); top: 0; '
                  : 'transform: rotate(0)'};
                transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
              }
              ::after {
                top: 8px;
                content: '';
                width: 24px;
                height: 2px;
                background: ${isToggledOn ? 'white' : `${color}`};
                position: absolute;
                left: 0;
                ${isToggledOn
                  ? 'transform: rotate(-45deg); top: 0;'
                  : 'transform: rotate(0)'};
                transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
              }
            `}
          />
        </button>
        {isToggledOn && (
          <div
            css={css`
              width: 100%;

              position: absolute;
              z-index: 20;
              left: 0;
              top: 0;
              width: 100vw;
              height: 100vh;
              display: flex;
              align-items: center;
              background: #7a614c;
            `}
          >
            <div
              css={css`
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                a {
                  color: white;
                  font-size: 22px;
                  margin: 10px 0;
                  padding: 10px;
                  border-radius: 5px;
                  :hover {
                    background: rgba(0, 0, 0, 0.2);
                  }
                }
                .active {
                  background: rgba(0, 0, 0, 0.2);
                }
              `}
            >
              <Link
                aria-label="View blog page"
                to="/blog"
                activeClassName="active"
              >
                Blog
              </Link>
              <Link
                aria-label="View photography page"
                to="/photography"
                activeClassName="active"
              >
                Photography
              </Link>
            </div>
          </div>
        )}
      </div>

      <div css={navSocialMedia}>
        <LinkedIn />
        <Instagram />
        <GitHub />
      </div>
    </nav>
  )
}

export default MobileMenu
