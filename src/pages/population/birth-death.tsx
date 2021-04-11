import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import {Container, Heading} from './components'
import rawData from './data/data.json'

const data = rawData.filter((rec) => rec.year >= 1947).map((rec) => ({
  year: rec.year,
  births: rec['live-births'],
  deaths: rec['deaths-total'],
}))

export const BirthDeath = () => {
  return (
    <Container>
      <Heading>Birth and death</Heading>
      <ResponsiveContainer
        width='100%' height={300}
        id='birth-and-death'
      >
        <LineChart data={data}>
          <CartesianGrid strokeDasharray='3 3'/>
          <XAxis dataKey='year'/>
          <YAxis tickFormatter={(value) => value.toLocaleString()}/>
          <Tooltip formatter={(value, name) => [value.toLocaleString(), name]}/>
          <Legend/>
          <Line type='monotone' dataKey='births' stroke={'#8ecb58'} activeDot={{r: 5}} strokeWidth={2}/>
          <Line type='monotone' dataKey='deaths' stroke={'#6d6d6d'} activeDot={{r: 5}} strokeWidth={2}/>
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}
