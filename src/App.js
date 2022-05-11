import React, { useRef } from 'react';
import { useState, useEffect } from "react"

import './App.css'
function App() {
 const [changeColor, setChangeColor] = useState()
 const colorRef = useRef()

 useEffect(() => {
   
  setTimeout(() => {
    setChangeColor(!changeColor)
   changeColor ? colorRef.current.style.background = 'red' : colorRef.current.style.background = 'green'
  }, 1000)

  },)

  return (
  <div className='App' ref={colorRef}></div>
  );
}

export default App;
