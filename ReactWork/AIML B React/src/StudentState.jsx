import React, { useState } from 'react'

function StudentState() {
    // const [state, setState] = useState(initialState)
    const[count,setCount]=useState(20)

    function doIncrement(){
        setCount(count+20);
    }

  return (
    <div>
        StudentState
        <h2>Counter:{count}</h2>
        <div>
            <button id='btn' onClick={doIncrement}>Increment</button>
        </div>
    </div>
  )
}

export default StudentState