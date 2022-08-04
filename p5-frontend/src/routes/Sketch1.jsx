import React from "react";
import App from "../App";
import Sketch from "react-p5"

let x = 50;
let y = 50;

function Sketch1 (props) {

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(720, 720).parent(canvasParentRef);
    }

    const draw = (p5) => {
        p5.background(0);
        p5.ellipse(x, y, 70, 70);

        x++
    }

    return (
        <div>
            <App />
           <Sketch setup={setup} draw={draw} className="sketch1"/>
        </div>
 
    )
}

export default Sketch1; 