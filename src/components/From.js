import React from 'react'
import './Design.css'
const From = (props) => {
const searchAll = (e)=>{
const toTop = e.target.value.length>=1?e.target.value.split(" ").map((heyy)=>heyy[0]?.toUpperCase()+ heyy.slice(1)).join(" "):e.target.value
props.onChamp(toTop)
console.log(toTop);
}
  return (
    <div className='class'>
      <input className='sear' type="search" placeholder='search dish here' onChange={searchAll}/>
    </div>
  )
}

export default From
