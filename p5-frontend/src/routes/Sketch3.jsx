import React from "react";
import App from "../App";
import Sketch from "react-p5";


function Sketch3 () {
 
    let t;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(720, 720).parent(canvasParentRef);
        p5.background(0);
        t = 0;

    }

    const draw = (p5) => {
        p5.background(0, 5)

        let x = p5.width * p5.noise(t);
        let y = p5.height * p5.noise(t + 5);
        let r = 255 *p5.noise(t + 10);
        let g = 255 * p5.noise(t + 15);
        let b = 255 * p5.noise(t + 20);

        p5.noStroke();
        p5.fill(r, g, b);
        p5.ellipse(x, y, 120, 120);
        t = t + 0.01;
     
    }

    return (
        <div>
            <App />
            <Sketch setup={setup} draw={draw} className="sketch1"/>
            
        </div>
 
    )
}

export default Sketch3; 