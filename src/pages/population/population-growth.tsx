import React from 'react'
import {CartesianGrid, Legend, Line, Tooltip, XAxis, YAxis, Bar, ComposedChart} from 'recharts'
import rawData from './data/data.json'

const data = rawData.filter((rec) => rec.year >= 1947).map((rec) => ({
  year: rec.year,
  naturalIncrease: rec['natural-increase'],
  netMigration: rec['net-migration'],
  populationIncrease: rec['total-population-increase'],
}))

// https://www.czso.cz/csu/czso/struktura-prirustku-obyvatel-v-letech-1950-2019
export const PopulationGrowth = () => {
  return (
    <div>
      <h2>Population growth</h2>
      <ComposedChart
        width={960}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="naturalIncrease" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="netMigration" stroke="#82ca9d" />
        <Bar dataKey="populationIncrease" fill="#8884d8" />
      </ComposedChart>
    </div>
  )
}
