import React from 'react'
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'

const Heading = styled(animated.h1)`
  color: #a71cff;
`

export const Home = () => {
  const props = useSpring({
    opacity: 1,
    from: {
      opacity: 0
    }
  })

  return (
      <Heading style={props}>Heading</Heading>
  )
}
