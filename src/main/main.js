import React, {Component} from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./main.css";


export class Main extends Component{
    
    render(){
        return(
            <React.Fragment>
                  <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div >
                    <img src="/assets/images/car4.jpg" />
                </div>
                <div>
                    <img src="/assets/images/car2.jpg" />
                </div>
                <div>
                    <img src="/assets/images/car3.jpg" />
                </div>
                <div>
                    <img src="/assets/images/car1.jpg" />
                </div>
            </Carousel>
              <div className="container">
            <div className="row">
              <h1 className="takeFull">Hours and Location</h1>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Day</th>
                          <th scope="col">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Monday</td>
                          <td>11 AM - 7 PM</td>
                        </tr>
                        <tr>
                          <td>Tuesday</td>
                          <td>11 AM - 7 PM</td>
                        </tr>
                        <tr>
                          <td>Wednesday</td>
                          <td>11 AM - 7 PM</td>
                        </tr>
                        <tr>
                          <td>Thursday</td>
                          <td>11 AM - 7 PM</td>
                        </tr>
                        <tr>
                          <td>Friday</td>
                          <td>11 AM - 7 PM</td>
                        </tr>
                        <tr>
                          <td>Saturday</td>
                          <td>10 AM - 7 PM</td>
                        </tr>
                        <tr>
                          <td>Sunday</td>
                          <td>12 AM - 6 PM</td>
                        </tr>
                        </tbody>
                    </table>
                  </div>
                
                  <div className="col-xs-12 col-md-6  para">
                    <h2>Talk and Fix! (Buy and Repair)</h2>
                    <p>
                    We miss you, and wish you well. While we're a good ways away from welcoming 
                    guests back into our shop, we're incredibly excited to offer you new deals.
                    <br/>
                    We have various cell phones brands like apple and samsung. We have accessories that go good with them.
                    <br/>
                    Various equipments like headphones and tablets are also present in our shop.
                    <br/>
                    We will make sure that you get the best product with best plans available for your needs. 
                    </p>
                  </div>
            </div>
            <div className="row">
            <div className="col-xs-12 col-md-12">
                    <img style={{maxWidth:"100%"}} src="/assets/images/map.png" alt="" className="img-responsive"/>
                  </div>
            </div>
                 
                </div>
            
            
            </React.Fragment>
        )
    }

}