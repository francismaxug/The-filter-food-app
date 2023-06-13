import React, { useState } from 'react'
import MainContent from './MainContent'
import From from './From'
import './Design.css'

 



const SecondMain = (props) => {
  const [valueTarget,setvalueTarget] = useState("")
  const workOut = (takePre)=>{
  setvalueTarget(takePre)
  }
  const filterAll = props.item.filter((care)=>{
   return care.name.startsWith(valueTarget)})
  
  return (
    <div >
      <From onChamp={workOut}/>
      <div className='flex'>
      {valueTarget===""? props.item.map((take)=><MainContent key={take.id} retake={take}/>) : filterAll.length===0 ? <div className='enter'><h2>No Results Found</h2></div>: filterAll.map((take)=><MainContent key={take.id}  retake={take}/> )}
    </div>
    </div>
  )
}

export default SecondMain
