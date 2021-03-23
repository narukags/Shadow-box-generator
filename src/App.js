import React, { useState } from "react"
import './App.css';

function App() {
  const [Hori, setHori] = useState(10);
  const [Veri, setVeri] = useState(10);
  const [Blur, setBlur] = useState(10);
  const [color, setColor] = useState("black");
  const [checkOn, setCheckOn] = useState(false);
  return (
    <div className="App">
      <div className="controls">
        <lable >Horizontal length</lable>
        <input type="range" min="-200" max="200" value={Hori} onChange={(e) => setHori(e.target.value)} />
        <lable >Verticle length</lable>
        <input type="range" min="-200" max="200" value={Veri} onChange={(e) => setVeri(e.target.value)} />
        <lable >blur</lable>
        <input type="range" min="0" max="200" value={Blur} onChange={(e) => setBlur(e.target.value)} />
        <lable >color</lable>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <div className="switch">
          <label>
            Outline
          <input type="checkbox" checked={checkOn} onChange={() => setCheckOn(!checkOn)} />
            <span className="lever"></span>
          insite
        </label>
        </div>

      </div>
      <div className="output"></div>
      <div className="box" style={{ boxShadow: `${checkOn ? "inset" : ""} ${Hori}px ${Veri}px ${Blur}px ${color}` }}>
        <p>box-shadow:{Hori}px {Veri}px {Blur}px {color}</p>

      </div>


    </div>
  );
}

export default App;
