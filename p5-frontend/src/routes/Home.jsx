import React from "react";
import App from "../App";

function Home () {
    return(
        <div>
            <App></App>
            <div id="homepage">
                p5.js is a javascript library for creative coding. In this project,
                I demonstrate 4 examples of how to use the p5 library within a react application. <br />
                <p>For more creative code, you can my work <a href="https://github.com/dakotahducharme">here</a> on my github</p>
            </div>
        </div>
    )
}

export default Home;