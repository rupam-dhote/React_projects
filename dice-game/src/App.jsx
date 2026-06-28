import React, { useState } from "react";
import "./App.css";
import Start from "./components/Start";
import Gameplay from "./components/Gameplay";

const App = () => {

  const [isStart,setStart]=useState(false);
  
  function toggleStart()
  {
    setStart((prev)=>!prev);
  }
  return(
    <main>
      {isStart?<Gameplay/>:<Start
      toggle={toggleStart}/>}
    </main>
  )
};

export default App;
