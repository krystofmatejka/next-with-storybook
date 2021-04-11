import React from 'react'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts'
import {Heading, Container} from './components'
import rawData from './data/data.json'

const data = rawData.map((year) => ({
  year: year.year,
  population: year.population,
}))

export const TotalPopulation = () => {
  return (
    <Container>
      <Heading>Total population</Heading>
      <ResponsiveContainer
        width='100%' height={300}
        id='population-growth'
      >
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray='3 3'/>
          <XAxis dataKey='year'/>
          <YAxis width={100}/>
          <Tooltip/>
          <Area
            type='monotone'
            dataKey='population'
            stroke={'#5e76a5'}
            strokeWidth={2}
            fill={'#4a74c9'}
          />
        </AreaChart>
      </ResponsiveContainer>
      <p>Data represents <strong>mid-year population</strong></p>
    </Container>
  )
}
