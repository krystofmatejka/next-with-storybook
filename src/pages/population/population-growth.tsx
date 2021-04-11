import React from 'react'
import {CartesianGrid, Legend, Line, Tooltip, XAxis, YAxis, Bar, ComposedChart, ResponsiveContainer} from 'recharts'
import {Heading, Container} from './components'
import rawData from './data/data.json'

const data = rawData.filter((rec) => rec.year >= 1947).map((rec) => ({
  year: rec.year,
  naturalIncrease: rec['natural-increase'],
  netMigration: rec['net-migration'],
  populationIncrease: rec['total-population-increase'],
}))

const labels = {
  naturalIncrease: {
    text: 'natural change',
  },
  netMigration: {
    text: 'net migration',
  },
  populationIncrease: {
    color: '#666666',
    text: 'total change',
  },
}

export const PopulationGrowth = () => {
  return (
    <Container>
      <Heading>Population growth</Heading>
      <ResponsiveContainer
        width='100%' height={300}
        id='population-growth'
      >
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray='3 3'/>
          <XAxis dataKey='year'/>
          <YAxis tickFormatter={(value) => value.toLocaleString()}/>
          <Tooltip
            formatter={(value, name) => [value.toLocaleString(), labels[name].text]}
            itemSorter={(item) => {
              if (labels[item.name].color) {
                item.color = labels[item.name].color
              }
              return 1
            }}
          />
          <Legend formatter={(value, entry) => {
            return <span style={{color: labels[value].color ?? entry.color}}>{labels[value].text}</span>
          }} />
          <Bar dataKey='populationIncrease' fill={'#00000020'}/>
          <Line type='monotone' dataKey='naturalIncrease' stroke={'#8ecb58'} activeDot={{r: 5}} strokeWidth={2}/>
          <Line type='monotone' dataKey='netMigration' stroke={'#4a74c9'} activeDot={{r: 5}} strokeWidth={2}/>
        </ComposedChart>
      </ResponsiveContainer>
      <ul>
        <li><strong>natural change</strong> is the difference between live births and deaths</li>
        <li><strong>net migration</strong> is the difference between the number of immigrants and the number of emigrants</li>
        <li><strong>total change</strong> is the sum of natural change and net migration</li>
      </ul>
    </Container>
  )
}
