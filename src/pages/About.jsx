/* eslint-disable no-unused-vars */
import React from "react";
import '../Styles/about.css';
import profile from '../assets/Dante.jpeg';
function About(){
return (
    <section>
        <h2>About Me</h2>
        <hr/>
        <div className="about--container">
            <div className="about--left">
                <img src={profile}/>
            </div>
            <div className="about--right">
        <div className="conten-main">
                <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dicta facere, veritatis incidunt tempora hic consectetur
                     vero mollitia iure in quisquam cum velit fuga harum 
                     temporibus nesciunt eius 
                    odit voluptas sequi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dicta facere, veritatis incidunt tempora hic consectetur
                     vero mollitia iure in quisquam cum velit fuga harum 
                     temporibus nesciunt eius 
                    odit voluptas sequi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dicta facere, veritatis incidunt tempora hic consectetur
                     vero mollitia iure in quisquam cum velit fuga harum 
                     temporibus nesciunt eius 
                    odit voluptas sequi!
                    
                    </p>
        </div>
        <div className="content--buttons">
            <button className="btn">Download CV</button>
        </div>
            </div>
        </div>
    </section>
)
}export default About;