import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./main.css";


export class Main extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center m-4">
            <div className="mainNameLogo" >
              <img width="150px" className="rounded-circle" src="/assets/images/pop.jpg" alt="ash" />
              <span>Aishwarya Rana</span>
            </div>
          </div>
        </div>

      </div>
    )
  }

}