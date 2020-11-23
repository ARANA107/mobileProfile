import React, { useEffect } from 'react'
import "@lottiefiles/lottie-player";

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
            <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_nnQHiM.json"
                background="transparent"
                speed="0.8"
                style={animationStyle}
                loop
                autoplay
            ></lottie-player>

            <div className="connectWM">Connect with me!</div>

            <div className="connectLogos">
                <a href="https://www.facebook.com/ash.rana.19/" target="_blank" rel="noopener noreferrer"><img className="logoImg" src="/assets/images/facebook.png" alt="" /></a>
                <a href="https://github.com/ARANA107" target="_blank" rel="noopener noreferrer"><img className="logoImg" src="/assets/images/github.png" alt="" /></a>
                <a href="mailto:ashrana1993@gmail.com" target="_blank" rel="noopener noreferrer"><img className="logoImg" src="/assets/images/gmail.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/ashrana1993/" target="_blank" rel="noopener noreferrer"><img className="logoImg" src="/assets/images/linkedin.png" alt="" /></a>
            </div>

        </div>
    )
}
