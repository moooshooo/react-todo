
import { useState } from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState("")

  const clickBtn=()=>{
    
  }

  /* let count = 6 */

/* 
  const clickBtn = () => {
    count++ //enklare men otydlig
    //count += 1 //Lite tydligare

    console.log(count) //Detta kommer visa i consolen att 
  }
   */

  return (
    <>
      <h1>Mos Sandbox: {count}</h1>
      <div className="card">
        <button onClick={clickBtn}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
