import NavBar from "./components/NavBar";
import Waitlist from "./components/Waitlist";
import Graphic from "./components/Graphic.js";
import { useState } from 'react'

function App() {
  
  
  return (
    <div className="App">
      <div className ="block1">
        <NavBar />
      </div>
      <div className ="block2">
        <Waitlist title="Enter email address"/>
        <Graphic />
      </div>
    </div>
  );
}

export default App;
