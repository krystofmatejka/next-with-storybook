import React from 'react'
import {TotalPopulation} from './total-population'
import {BirthDeath} from './birth-death'
import {PopulationGrowth} from './population-growth'

const Population = () => {
  return (
    <>
      <div>
        <TotalPopulation/>
        <PopulationGrowth/>
        <BirthDeath/>
      </div>
    </>
  )
}

export default Population
