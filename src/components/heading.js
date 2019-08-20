import React from 'react'
import styled from '@emotion/styled'
import 'typeface-fugaz-one'

const StyledHeading = styled.h1`
  font-family: Fugaz One;
`

const Heading = ({ children }) => <StyledHeading>{children}</StyledHeading>

export default Heading
