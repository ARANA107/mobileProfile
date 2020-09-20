import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PhoneMarket } from '../phoneMarket/phoneMarket';
import { Header } from '../Header/header';
import Accessories from '../Accessories/accessories';
import { Main } from '../main/main';
import { Footer } from '../Footer/footer';
import About from '../Accessories/components/About';
import Contact from '../Accessories/components/Contact';

export class Home extends Component {

    style = {
        minHeight: "100%",
        position: "relative"
    }
    render() {
        return (
            <>
                <Header />
                <div style={{ minHeight: "500px" }}>
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route exact path='/accessories' component={Accessories} />
                        <Route exact path='/phone' component={PhoneMarket} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Redirect to='/' />
                    </Switch>
                </div>
                <div style={this.style}>
                    <Footer />
                </div>
            </>

        )
    }
}