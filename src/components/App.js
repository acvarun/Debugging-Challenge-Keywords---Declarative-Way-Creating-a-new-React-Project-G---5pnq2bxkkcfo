import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0)

  return (
    <div className="ball">
      <h1 className="count" >{count}</h1>
      <button className='increment-button' onClick={() => { setCount(count + 1) }} onDoubleClick={() => { alert("cant edit it") }}>Increment</button>
    </div>
  )
}


export default App;
