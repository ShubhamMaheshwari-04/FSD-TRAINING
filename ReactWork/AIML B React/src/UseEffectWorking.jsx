import React from 'react'

function UseEffectWorking() {

  useEffect(()=>{
    console.log("component render")
  })  
  return (
    <div>UseEffectWorking</div>
  )
}

export default UseEffectWorking