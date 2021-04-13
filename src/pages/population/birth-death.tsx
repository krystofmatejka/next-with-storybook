import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import rawData from './data/data.json'

const data = rawData.map((rec) => ({
  year: rec.year,
  births: rec['live-births'],
  deaths: rec['deaths-total'],
}))

export const BirthDeath = () => {
  return (
    <div>
      <h2>Birth and death</h2>
      <LineChart
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
        <Line type="monotone" dataKey="births" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="deaths" stroke="#82ca9d" activeDot={{ r: 8 }} />
      </LineChart>

    </div>
  )
}
