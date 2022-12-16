import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0)

  function click(){
    setCount(count + 1);
  }
  function doubleClick(){
    alert("cant edit it") 
    setCount(count-2);
  }
  return (
    <div className="ball">
      <h1 className="count">{count}</h1>
      <button className='increment-button' onClick={click} onDoubleClick={doubleClick}>Increment</button>
    </div>
  )
}
