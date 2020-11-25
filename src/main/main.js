import React, { useEffect } from 'react'
import "@lottiefiles/lottie-player";

import smiling from '../images/smiling.png';

import './main.css';

export const Main = (props) => {

  useEffect(() => {
    props.setT(0);
  }, []);

  const animationStyle = {
    width: "300px",
    height: "300px"
  }

  return (
    <>
      <div className="mainAnimation">
        <lottie-player
          src="https://assets10.lottiefiles.com/private_files/lf30_WdTEui.json"
          background="transparent"
          speed="0.8"
          style={animationStyle}
          loop
          autoplay
        ></lottie-player>
      </div>

      <div className="nameIntro">
        <p className="hey">Hey <img width="41px" src={smiling} /></p>
        <p className="iName">I am Aishwarya Rana</p>
      </div>
      <div className="sign">
        <span className="fast-flicker">D</span>eve<span className="flicker">lo</span>per
    </div>

    </>
  )
}
