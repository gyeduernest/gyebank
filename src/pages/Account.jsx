import React from 'react'
import Navigation from './Profile'
import { Allcards } from '../Charts/Allcards'
import Accountsettings from '../Components/Accountsettings'


export default function Account() {
  return (
    <div className="dark:bg-slate-900 dark:text-slate-50 bg-slate-50">
    <Navigation/>
    <div className="">
       <Allcards/>
       <Accountsettings/>

    </div>        
</div>
  )
}
