import React from 'react'
import styled from '@emotion/styled'
import 'typeface-fugaz-one'

const StyledHeading = styled.h1`
  font-family: Fugaz One;
  font-size: '112sp';
  color: #212121;
  margin-top: 0;

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

const Heading = ({ children }) => <StyledHeading>{children}</StyledHeading>

export default Heading
