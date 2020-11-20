import React, { Component, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Main } from '../main/main';
import Projects from '../components/projects/Projects';
import { Resume } from '../components/resume/resume';
import Contact from '..//components/Contact';


import './home.css';
import SidePanel from '../components/SidePanel/SidePanel';

export const Home = () => {

    const style = {
        width: "30%",
        height: "80vh"
    }

    const [toggle, setToggle] = useState(0);


    const changeToggle = () => {
        setToggle(toggle => !toggle);
    }

    const setT = (val) => {
        setToggle(val);
        console.log('--------------', val);
    }


    return (
        <div className="home">

            <SidePanel toggle={toggle} changeToggle={changeToggle.bind(this)} />
            <div style={{ backgroundColor: "green" }}><img onClick={changeToggle.bind(this)} className="hamStyle" src="/assets/images/hamBurger.png" /></div>
            <div>
                <Switch>
                    <Route exact path='/home' component={Main} />
                    <Route path="/resume" render={props => <Resume setT={setT.bind(this)} />} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                    <Redirect to='/home' />
                </Switch>
            </div>


        </div>

    )

}


