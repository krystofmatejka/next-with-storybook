import React, {useState} from 'react'
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'

const Square = styled(animated.div)`
  width: 200px;
  height: 200px;
  background: #ff686e;
`

export const Move = () => {
  const [clickedTimes, setClickedTimes] = useState(0)
  const props = useSpring({
    xy: [clickedTimes * 200, 0]
  })

  return (
    <div>
      <Square
        onClick={() => setClickedTimes((state) => state + 1)}
        style={{
          // @ts-ignore
          transform: props.xy.interpolate((x, y) => `translate(${x}px, ${y}px)`)
        }}
      />
    </div>
  )
}
