import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Main } from '../main/main';
import { Projects } from '../components/projects/Projects';
import { Resume } from '../components/resume/resume';
import { Contact } from '..//components/contact/Contact';


import './home.css';
import SidePanel from '../components/SidePanel/SidePanel';

export const Home = () => {

    const [toggle, setToggle] = useState(0);


    //this is to toggle with hamburger menu item
    const changeToggle = () => {
        setToggle(toggle => !toggle);
    }

    //this is to close the sidePanel when you switch pages.
    const setT = (val) => {
        setToggle(val);
    }


    return (
        <div className="home">

            <SidePanel toggle={toggle} changeToggle={changeToggle.bind(this)} />
            <div style={{ backgroundColor: "green" }}><img alt={"menu item"} onClick={changeToggle.bind(this)} className="hamStyle" src="/assets/images/hamBurger.png" /></div>
            <div>
                <Switch>
                    <Route path="/home" render={props => <Main setT={setT.bind(this)} />} />
                    <Route path="/resume" render={props => <Resume setT={setT.bind(this)} />} />
                    <Route path="/projects" render={props => <Projects setT={setT.bind(this)} />} />
                    <Route path="/contact" render={props => <Contact setT={setT.bind(this)} />} />
                    <Redirect to='/home' />
                </Switch>
            </div>


        </div>

    )

}


