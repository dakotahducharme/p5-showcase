import React from "react";

function Header () {
    return (
        <div>
            <header>
                <div>
                <h1><a href="/">Data Vis</a></h1>
                </div>
                <div>
                    <ul>
                        <li><a href="/sketch1">sketch 1</a></li>
                        <li><a href="/sketch2">sketch 2</a></li>
                        <li><a href="/sketch3">sketch 3</a></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header;