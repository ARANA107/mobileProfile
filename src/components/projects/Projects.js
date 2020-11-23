import React, { useEffect } from 'react'
import "@lottiefiles/lottie-player";

import project from './project.svg';
import project1 from './project1.svg';
import project2 from './project2.svg';


import './project.css';

export const Projects = (props) => {

    useEffect(() => {
        props.setT(0);
    }, []);

    const animationStyle = {
        width: "150px",
        height: "150px",
        marginLeft: "25px"
    }

    return (
        <div>
            <div className="projectAnimation">
                <lottie-player
                    src="https://assets2.lottiefiles.com/packages/lf20_snxqzipw.json"
                    background="transparent"
                    speed="0.8"
                    style={animationStyle}
                    loop
                    autoplay
                ></lottie-player>
            </div>
            <div className="proMain">
                <div className="projectHeading">Projects</div>

                <p className="desc">(Projects deployed on heroku will take time to load)</p>

                <div id="proId" className="projectsScroll">
                    <a href="https://highchartsangular.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img width="200px" src={project} /></a>
                    <a href="https://protected-cove-26719.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img className="even" width="200px" src={project1} /></a>
                    <a href="https://pacific-meadow-32711.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img width="200px" src={project2} /></a>
                </div>
            </div>
        </div>
    )
}
