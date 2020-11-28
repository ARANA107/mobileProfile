import React, { useEffect } from 'react'
import "@lottiefiles/lottie-player";

import './resume.css';
export const Resume = (props) => {

    useEffect(() => {
        props.setT(0);
    }, []);

    const animationStyle = {
        width: "300px",
        height: "300px"
    }
    return (
        <>
            <div className="resumeAnimation">
                <lottie-player
                    src="https://assets10.lottiefiles.com/packages/lf20_4DLPlW.json"
                    background="transparent"
                    speed="0.8"
                    style={animationStyle}
                    loop
                    autoplay
                ></lottie-player>
            </div>
            <div className="mainCont">
                <div className="resumeHeading">Resume</div>
                <p className="goal"> I am a front-end developer and have hands on experience in React and Angular. My goal is to not just
                develop front end and back end but someone who can also design database, do testing on finished application and also deploy it
                in the end. I am on the journey to master "IT" all.  </p>
                <div className="resBtn"><button className="button"><a href='/assets/AshResume.docx' download>Download</a>
                </button></div>
            </div>
        </>
    )
}

