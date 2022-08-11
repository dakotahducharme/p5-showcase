import React from "react";
import App from "../App";
import Sketch from "react-p5";


let x = 50;

function Sketch2 () {
    
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(720, 720).parent(canvasParentRef);
    }

    const draw = (p5) => {
        // p5.background(0);
        // p5.ellipse(x, y, 70, 70);

        const r = p5.random(255);
        const g = p5.random(100, 200)
        const b = p5.random(100)
        // const a =
        if (p5.mouseIsPressed){
            p5.fill("#68A691")
        } else {
            p5.fill(r, g, b)
        }

        p5.ellipse(p5.mouseX, p5.mouseY, 80, 80)
        p5.noStroke();


        x++
    }

    return (
        <div>
            <App />
           <Sketch setup={setup} draw={draw} className="sketch1"/>
        </div>
 
    )
}
export default Sketch2; 