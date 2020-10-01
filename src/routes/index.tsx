import React from 'react';
// import Loadable from 'react-loadable';
import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import  HomePage  from './HomePage';
import Navbar from './HomePage/components/Navbar';
import Footer from './HomePage/components/Footer';
import Login from './Registration/Login';
import Register from './Registration/Register';
import SongDetails from './SongDetails';

const RegistrationWrapper = styled.div`
font-family: sans-serif;
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
//   background-color: #ff9900;
`;


export default () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/song/:songId" component={SongDetails} />
            <RegistrationWrapper>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            </RegistrationWrapper>
            
        </Switch>
        <Footer />
        </BrowserRouter>
)
