import React from 'react'
import Navigation from './Profile'
import { Allcards } from '../Charts/Allcards'
import { ExtrasGrid } from '../Components/ExtrasGrid'

export default function Extras() {
  return (
    
    <>
    <div className='dark:bg-slate-900 dark:text-slate-50 bg-slate-50'>
      <Navigation/>
      <Allcards/>
      <ExtrasGrid/>


    </div>
    
    </>
    
  )
}
