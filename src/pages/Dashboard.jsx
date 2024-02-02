import React from 'react'
import { Allcards } from '../Charts/Allcards'
import { Boxes } from '../Charts/Boxes'
import Navigation from './Profile'

export default function Dashboard() {
  return (
    <div className=''>
      

      <Navigation/>
      <Allcards/>
      <Boxes/>
    </div>
  )
}
