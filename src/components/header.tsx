import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h1`
  font-family: sans-serif;
  color: #3489c1
`

interface Props {
  text: string
}

export const Header = ({text}: Props) => <StyledHeading>{text}</StyledHeading>
