import React from "react";
import App from "../App";
import Sketch from "react-p5"

let t;
let x;
let y

function Sketch1 (p) {

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(720, 720).parent(canvasParentRef);
        p5.stroke(255);
        p5.fill(255);
        p5.background(0)
    }

    const draw = (p5) => {
        p5.image(p5.lineModule, 0, 0, 5, p5.moduleSize);

        // if (p5.mouseIsPressed && p5.mouseButton == p5.LEFT){
        //     let d = p5.dist(x, y, p5.mouseX, p5.mouseY);
        //     if (d > p5.stepSize) {
        //         let angle = p5.atan2(p5.mouseY - y, p5.mouseX - x);

        //         p5.push();
        //         p5.translate(p5.mouseX, p5.mouseY);
        //         p5.rotate(angle + 3.1459);
        //         p5.ellipse(0, 0, 5, 5);
        //         p5.image(p5.lineModule, 0, 0, d, p5.moduleSize);
        //         p5.pop();

        //         x = x + p5.cos(angle) * p5.stepSize;
        //         y = y + p5.sin(angle) * p5.stepSize;
        //     }
        // }
    }

    // const setup = (p5, canvasParentRef) => {
    //     p5.createCanvas(720, 720).parent(canvasParentRef);
    //     p5.stroke(0, 15);
    //     p5.noFill();
    //     p5.background(255);
    // }

    // const draw = (p5) => {
    //     let twoPi = p5.TWO_PI;

    //     p5.translate(p5.width / 2, p5.height / 2);
    //     p5.beginShape();
    //     for(let i=0; i < 200; i++){
    //         let ang = p5.map(i, 0, 200, 0, 6.28);
    //         let rad = 200 * p5.noise(i * 0.01, t * 0.005);
    //         let x = rad * p5.cos(ang);
    //         let y = rad * p5.sin(ang);
    //         p5.curveVertex(x, y);
    //     }
    //     p5.endShape(p5.CLOSE);
    //     t += 1;
    //     if (p5.frameCount % 600 == 0) {
    //         p5.background(255);
    //       }
    


        // const r = p5.random(255)
        // const g = p5.random(255)
        // const b = p5.random(255)
     
    // }

    return (
        <div>
            <App />
           <Sketch setup={setup} draw={draw} className="sketch1"/>
        </div>
 
    )
}

export default Sketch1; 