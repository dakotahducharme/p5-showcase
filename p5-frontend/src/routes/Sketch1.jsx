import React from "react";
import App from "../App";
import Sketch from "react-p5"
import p5Types from "p5";
// import * as p5 from "p5"

let t;
let x;
let y;

// function sketch (p5) {
//     const setup = (p5, canvasParentRef) => {
//         p5.createCanvas(720, 720).parent(canvasParentRef);
//         p5.stroke(255);
//         p5.fill(255);
//         p5.background(0)
//     }

//     const draw = (p5) => {
//         p5.image(p5.lineModule, 0, 0, 5, p5.moduleSize);

//         if (p5.mouseIsPressed && p5.mouseButton == p5.LEFT){
//             let d = p5.dist(x, y, p5.mouseX, p5.mouseY);
//             if (d > p5.stepSize) {
//                 let angle = p5.atan2(p5.mouseY - y, p5.mouseX - x);

//                 p5.push();
//                 p5.translate(p5.mouseX, p5.mouseY);
//                 p5.rotate(angle + 3.1459);
//                 p5.ellipse(0, 0, 5, 5);
//                 p5.image(p5.lineModule, 0, 0, d, p5.moduleSize);
//                 p5.pop();
//                 x = x + p5.cos(angle) * p5.stepSize;
//                 y = y + p5.sin(angle) * p5.stepSize;
//             }
//         }
//     }

// }

function Sketch1 (p) {

    function randomColor (p5) {

        const r = p5.random(255)
        const g = p5.random(255)
        const b = p5.random(255)
        return [r, g, b]
    }

    function setup (p5, canvasParentRef) {
        p5.createCanvas(720, 720).parent(canvasParentRef);
        p5.background(...randomColor(p5));
    }

    function draw (p5) {
        // let smallFlowerX = flowerX / 2
        // let smallFlowerY = flowerY / 2;

       

//////////////////////////////////////////////////////
        //adding random flowers

        let randFlowerX = p5.random(0, p5.width)
        let randFlowerY = p5.random(0, p5.height)
        let randPetalSize = p5.random(40, 240)
        let randPetalDistance = randPetalSize /2

        
        p5.fill(...randomColor(p5));


          //upper left petal~
          p5.circle(randFlowerX - randPetalDistance, randFlowerY - randPetalDistance, randPetalSize)

          //upper right petal~
          p5.circle(randFlowerX + randPetalDistance, randFlowerY - randPetalDistance, randPetalSize)
 
           //bottom left petal~
         p5.circle(randFlowerX - randPetalDistance, randFlowerY + randPetalDistance, randPetalSize)
 
          //bottom right petal~
          p5.circle(randFlowerX + randPetalDistance, randFlowerY + randPetalDistance, randPetalSize)
 
         //center petal 

         p5.fill(...randomColor(p5));
         p5.circle(randFlowerX, randFlowerY, randPetalSize);


        p5.frameRate(10)

    }


    return (
        <div>
            <App />
           <Sketch setup={setup} draw={draw} className="sketch1"/>
        </div>
 
    )
}

export default Sketch1; 