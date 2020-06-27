import React, {Component} from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import {PhoneMarket} from '../phoneMarket/phoneMarket';
import {Header} from '../Header/header';
import Accessories from '../Accessories/accessories';
import {Main} from '../main/main';
import {Footer} from '../Footer/footer';

export class Home extends Component{


    render(){
        return(
                <div className="App">
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route exact path='/accessories' component={Accessories} />
                        <Route exact path='/phone' component={PhoneMarket} />
                        <Redirect to='/' />
                    </Switch>
                    <Footer/>
                </div>

        )
    }
}