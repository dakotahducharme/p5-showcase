import React from "react";
import App from "../App";
import Sketch from "react-p5";


function Sketch3 () {
    let x = 50;
    let y = 50;
    
    let rotation = 0;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(720, 720).parent(canvasParentRef);
    }

    const draw = (p5) => {
        // p5.background(0);
        // p5.ellipse(x, y, 70, 70);
        if (p5.mouseIspressed){
            p5.fill(0)
        } else {
            p5.fill(255)
        }

        p5.ellipse(p5.mouseX, p5.mouseY, 80, 80)

        x++
    }

    return (
        <div>
            <App />
            <Sketch setup={setup} draw={draw} className="sketch1"/>
            
        </div>
 
    )
}

export default Sketch3; 