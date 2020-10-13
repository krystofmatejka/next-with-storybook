import React from 'react'
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #f0f0f0;
`

const Card = styled(animated.div)`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  background: #779bf0;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;

  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`

const calc = (x, y) => [-(y - window.innerHeight / 2) / 10, (x - window.innerWidth / 2) / 10, 1.1]
const trans: any = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const Perspective = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 5,
      tension: 450,
      friction: 40
    }
  }))

  return (
    <Container>
      <Card
        onMouseMove={({clientX, clientY}) => set({xys: calc(clientX, clientY)})}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{transform: props.xys.interpolate(trans)}}
      />
    </Container>
  )
}
