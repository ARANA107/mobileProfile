import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './sidePanel.css';


const SidePanel = (props) => {

    const [toggle, setToggle] = useState(0);

    useEffect(() => {
        console.log(props);
    }, [])

    return (
        <div>
            <div id="menu" className={props.toggle ? "show" : "hide"}>
                <div className="sectionOne">
                    <div className="logoWithName">
                        <div className="logo">
                            <img src="/assets/images/pop.jpg" />
                        </div>
                        <div className="name">
                            Ash
                    </div>

                    </div>
                    <nav id="sidebar">

                        <ul className="list-unstyled components">
                            <NavLink activeClassName="selected" to="/home">
                                <li>Home</li>
                            </NavLink>

                            <NavLink activeClassName="selected" to="/resume">
                                <li>Resume</li>
                            </NavLink>

                            <NavLink activeClassName="selected" to="/projects">
                                <li>Projects</li>
                            </NavLink>
                            <NavLink activeClassName="selected" to="/contact">
                                <li>Contact</li>
                            </NavLink>
                        </ul>
                    </nav>

                </div>
            </div>
            <div id="arrow" className={props.toggle ? "showw" : "hidee"} onClick={(e) => props.changeToggle()}>

            </div>
            <section id="section04" class="demo">
                <a href="#section05"><span></span></a>
            </section>
        </div>
    )
}

export default SidePanel
