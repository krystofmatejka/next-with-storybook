import React from 'react'
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'

const Container = styled.div`
  height: 100vh;
`

const Square = styled(animated.div)`
  width: 50%;
  height: 50%;
  background: #b8b8b8;
  will-change: transform;
`

export const Infinite = () => {
  const props = useSpring({
    from: {
      xy: [0, 0]
    },
    to: async (next) => {
      while (1) {
        await next({xy: [100, 0]})
        await next({xy: [100, 100]})
        await next({xy: [0, 100]})
        await next({xy: [0, 0]})
      }
    }
  })

  return (
    <Container>
      <Square
        style={{
          transform: props.xy.interpolate((x, y) => `translate(${x}%, ${y}%)`)
        }}
      />
    </Container>
  )
}
