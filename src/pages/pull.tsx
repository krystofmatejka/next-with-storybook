import React from 'react'
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'
import {useDrag} from 'react-use-gesture'
import {Container} from '../components'

const Ball = styled(animated.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #68efc0;
`

export const Pull = () => {
  const [props, set] = useSpring(() => ({xy: [0, 0]}))
  const bind = useDrag(({down, movement}) => {
    const x = down ? movement[0] : 0
    const y = down ? movement[1] : 0
    set({xy: [x, y]})
  })

  return (
    <Container>
      <Ball
        {...bind()}
        style={{
          transform: props.xy.interpolate((x, y) => `translate(${x}px, ${y}px)`)
        }}
      />
    </Container>
  )
}
