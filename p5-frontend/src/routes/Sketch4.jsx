import React from "react";
import App from "../App";
import Sketch from "react-p5";


function Sketch4 () {
 
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(720, 720, p5.WEBGL).parent(canvasParentRef);

    }

    const draw = (p5) => {
        p5.background(0);

        ////////////////top coil /////////////////
        // p5.translate(-100, 100, 0)
        // p5.normalMaterial();
        // p5.push()
        // p5.rotateZ(p5.frameCount * 0.01)
        // p5.rotateX(p5.frameCount * 0.01)
        // p5.rotateY(p5.frameCount * 0.01)
        // p5.torus(80, 20);
        // p5.pop()

    
  
    //////////////// middle coil ///////////////////////

       p5.translate(-120, -200, 0)
       p5.normalMaterial();
        p5.push()
        p5.rotateZ(p5.frameCount * 0.01)
        p5.rotateX(p5.frameCount * 0.01)
        p5.rotateY(p5.frameCount * 0.01)
        p5.torus(80, 20);
        p5.pop()

       p5.translate(40, 5, 0)
       p5.normalMaterial();
        p5.push()
        p5.rotateZ(p5.frameCount * 0.01)
        p5.rotateX(p5.frameCount * 0.01)
        p5.rotateY(p5.frameCount * 0.01)
        p5.torus(80, 20);
        p5.pop()

        p5.translate(40, 10, 0)
        p5.normalMaterial();
        p5.push()
        p5.rotateZ(p5.frameCount * 0.01)
        p5.rotateX(p5.frameCount * 0.01)
        p5.rotateY(p5.frameCount * 0.01)
        p5.torus(80, 20);
        p5.pop()

       p5.translate(40, 15, 0)
       p5.normalMaterial();
        p5.push()
        p5.rotateZ(p5.frameCount * 0.01)
        p5.rotateX(p5.frameCount * 0.01)
        p5.rotateY(p5.frameCount * 0.01)
        p5.torus(80, 20);
        p5.pop()

        p5.translate(40, 20, 0)
       p5.normalMaterial();
        p5.push()
        p5.rotateZ(p5.frameCount * 0.01)
        p5.rotateX(p5.frameCount * 0.01)
        p5.rotateY(p5.frameCount * 0.01)
        p5.torus(80, 20);
        p5.pop()

        p5.translate(40, 25, 0)
       p5.normalMaterial();
        p5.push()
        p5.rotateZ(p5.frameCount * 0.01)
        p5.rotateX(p5.frameCount * 0.01)
        p5.rotateY(p5.frameCount * 0.01)
        p5.torus(80, 20);
        p5.pop()

        p5.translate(40, 30, 0)
       p5.normalMaterial();
        p5.push()
        p5.rotateZ(p5.frameCount * 0.01)
        p5.rotateX(p5.frameCount * 0.01)
        p5.rotateY(p5.frameCount * 0.01)
        p5.torus(80, 20);
        p5.pop()

        p5.translate(40, 35, 0)
       p5.normalMaterial();
        p5.push()
        p5.rotateZ(p5.frameCount * 0.01)
        p5.rotateX(p5.frameCount * 0.01)
        p5.rotateY(p5.frameCount * 0.01)
        p5.torus(80, 20);
        p5.pop()

        p5.translate(40, 40, 0)
       p5.normalMaterial();
        p5.push()
        p5.rotateZ(p5.frameCount * 0.01)
        p5.rotateX(p5.frameCount * 0.01)
        p5.rotateY(p5.frameCount * 0.01)
        p5.torus(80, 20);
        p5.pop()

        p5.translate(40, 45, 0)
       p5.normalMaterial();
        p5.push()
        p5.rotateZ(p5.frameCount * 0.01)
        p5.rotateX(p5.frameCount * 0.01)
        p5.rotateY(p5.frameCount * 0.01)
        p5.torus(80, 20);
        p5.pop()   

        p5.translate(40, 55, 0)
       p5.normalMaterial();
        p5.push()
        p5.rotateZ(p5.frameCount * 0.01)
        p5.rotateX(p5.frameCount * 0.01)
        p5.rotateY(p5.frameCount * 0.01)
        p5.torus(80, 20);
        p5.pop()



        

         //////////////// bottom coil //////////////
         p5.translate(-40, 55, 0)
        p5.normalMaterial();
         p5.push()
         p5.rotateZ(p5.frameCount * 0.01)
         p5.rotateX(p5.frameCount * 0.01)
         p5.rotateY(p5.frameCount * 0.01)
         p5.torus(80, 20);
         p5.pop()

         p5.translate(-35, 55, 0)
         p5.normalMaterial();
          p5.push()
          p5.rotateZ(p5.frameCount * 0.01)
          p5.rotateX(p5.frameCount * 0.01)
          p5.rotateY(p5.frameCount * 0.01)
          p5.torus(80, 20);
          p5.pop()

          p5.translate(-30, 55, 0)
         p5.normalMaterial();
          p5.push()
          p5.rotateZ(p5.frameCount * 0.01)
          p5.rotateX(p5.frameCount * 0.01)
          p5.rotateY(p5.frameCount * 0.01)
          p5.torus(80, 20);
          p5.pop()

          p5.translate(-25, 55, 0)
         p5.normalMaterial();
          p5.push()
          p5.rotateZ(p5.frameCount * 0.01)
          p5.rotateX(p5.frameCount * 0.01)
          p5.rotateY(p5.frameCount * 0.01)
          p5.torus(80, 20);
          p5.pop()

          p5.translate(-20, 55, 0)
          p5.normalMaterial();
           p5.push()
           p5.rotateZ(p5.frameCount * 0.01)
           p5.rotateX(p5.frameCount * 0.01)
           p5.rotateY(p5.frameCount * 0.01)
           p5.torus(80, 20);
           p5.pop()

           p5.translate(-15, 55, 0)
          p5.normalMaterial();
           p5.push()
           p5.rotateZ(p5.frameCount * 0.01)
           p5.rotateX(p5.frameCount * 0.01)
           p5.rotateY(p5.frameCount * 0.01)
           p5.torus(80, 20);
           p5.pop()

        //  p5.translate(-200, -105, 0)
        //  p5.normalMaterial();
        //   p5.push()
        //   p5.rotateZ(p5.frameCount * 0.01)
        //   p5.rotateX(p5.frameCount * 0.01)
        //   p5.rotateY(p5.frameCount * 0.01)
        //   p5.torus(80, 20);
        //   p5.pop()


    }

    return (
        <div>
            <App />
            <Sketch setup={setup} draw={draw} className="sketch1"/>
            
        </div>
 
    )
}

export default Sketch4; 