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
      xy: [0, 0],
      background: '#b8b8b8'
    },
    to: async (next) => {
      while (1) {
        await next({xy: [100, 0], background: '#83bede'})
        await next({xy: [100, 100], background: '#68d06c'})
        await next({xy: [0, 100], background: '#e2be62'})
        await next({xy: [0, 0], background: '#b8b8b8'})
      }
    }
  })

  return (
    <Container>
      <Square
        style={{
          background: props.background,
          transform: props.xy.interpolate((x, y) => `translate(${x}%, ${y}%)`)
        }}
      />
    </Container>
  )
}
