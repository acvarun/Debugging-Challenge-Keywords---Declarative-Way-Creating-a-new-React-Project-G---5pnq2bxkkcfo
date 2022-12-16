import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0)

  return (
    <div class="ball">
      <h1 class="count">{count}</h1>
      <button class='increment-button' onClick={() => { setCount(count + 1) }} onDoubleClick={() => { alert("cant edit it") }}>Increment</button>
    </div>
  )
}


export default App;
