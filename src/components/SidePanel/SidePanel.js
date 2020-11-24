import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './sidePanel.css';


const SidePanel = (props) => {

    return (
        <div>
            <div id="menu" className={props.toggle ? "show" : "hide"}>
                <div className="sectionOne">
                    <div className="logoWithName">
                        <div className="logo">
                            <img alt={"photo"} src="public/assets/images/pop.jpg" />
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
            {/* <div id="arrow" className={props.toggle ? "showw" : "hidee"} onClick={(e) => props.changeToggle()}>

            </div> */}

        </div>
    )
}

export default SidePanel
