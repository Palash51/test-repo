import React from 'react';
// import Loadable from 'react-loadable';
import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import  HomePage  from './HomePage';
import Navbar from './HomePage/components/Navbar';
import Footer from './HomePage/components/Footer';



export default () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/home" component={HomePage} />
        </Switch>
        <Footer />
        </BrowserRouter>
)
