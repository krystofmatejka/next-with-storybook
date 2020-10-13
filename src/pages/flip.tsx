import React, {useState} from 'react'
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'
import {Container} from '../components'

const CardsContainer = styled.div`
  width: 100%;
  height: 33vh;
  position: relative;
`

const BasicCard = styled.div`
  width: 100%;
  height: 33vh;
  box-shadow: inset 0px 0px 200px 10px rgba(0,0,0,0.2);
  position: absolute;
  will-change: transform;
`

const GreenCard = styled(animated(BasicCard))`
  background: #73df89;
  z-index: 2;
`

const BlueCard = styled(animated(BasicCard))`
  background: #19bff2;
  z-index: 1;
`

export const Flip = () => {
  const [flipped, setFlipped] = useState(false)
  const {transform, opacity} = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: {
      mass: 5,
      tension: 500,
      friction: 80
    }
  })

  return (
    <Container>
      <CardsContainer
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <GreenCard
          style={{ opacity: opacity.interpolate((o: number) => 1 - o), transform }}
        />
        <BlueCard
          style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}
        />
      </CardsContainer>
    </Container>
  )
}
