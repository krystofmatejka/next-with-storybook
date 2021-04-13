import React from 'react'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'
import rawData from './data/data.json'

const data = rawData.map((year) => ({
  year: year.year,
  population: year.population,
}))

export const TotalPopulation = () => {
  return (
    <div>
      <h2>Total population</h2>
      <AreaChart
        width={960}
        height={400}
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
        <YAxis/>
        <Tooltip/>
        <Area type='monotone' dataKey='population' stroke='#8884d8' fill='#8884d8'/>
      </AreaChart>
    </div>
  )
}
