import React, { useEffect } from 'react'
import "@lottiefiles/lottie-player";

import facebook from '../../images/facebook.png';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import gmail from '../../images/gmail.png';

import './contact.css';
export const Contact = (props) => {

    useEffect(() => {
        props.setT(0);
    }, []);
    const animationStyle = {
        width: "350px",
        height: "270px",
        marginLeft: "12.5px"
    }
    return (
        <div>
            <div className="whole">
                <div className="contactAnimation">
                    <lottie-player
                        src="https://assets5.lottiefiles.com/packages/lf20_nnQHiM.json"
                        background="transparent"
                        speed="0.8"
                        style={animationStyle}
                        loop
                        autoplay
                    ></lottie-player>
                </div>

                <div className="cLog">
                    <div className="connectWM">Connect with me!</div>

                    <div className="connectLogos">
                        <a href="https://www.facebook.com/ash.rana.19/" target="_blank" rel="noopener noreferrer"><img className="logoImg" src={facebook} alt="" /></a>
                        <a href="https://github.com/ARANA107" target="_blank" rel="noopener noreferrer"><img className="logoImg" src={github} alt="" /></a>
                        <a href="mailto:ashrana1993@gmail.com" target="_blank" rel="noopener noreferrer"><img className="logoImg" src={gmail} alt="" /></a>
                        <a href="https://www.linkedin.com/in/ashrana1993/" target="_blank" rel="noopener noreferrer"><img className="logoImg" src={linkedin} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
