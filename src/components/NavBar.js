import React from "react";
import "./NavBar.css";

export default function Navigation() {
    return (
        <div className = 'container'>
            <ul className = "unordered-list">
                <li>
                    <a href="App.js">Home</a>
                </li>
                <li>
                    <a href ="App.js">About Us</a>
                </li>
                <li>
                    <a href ="App.js">Learn More</a>
                </li>
                <li className = "list-child-right">
                    <a href="App.js">contact-us</a>
                </li>
            </ul>
        </div>
    );
};
















// import './NavBar.css'

// export default function Navigation(){
//     return(
//         <div className="nav">
//             <li>
//                 <img src = '' alt = "nothing yet"></img>
//             </li>
//             <li>
//                 Home
//             </li>
//             <li>
//                 About Us
//             </li>
//         </div>

//     );

// };