import React from 'react';
// import Loadable from 'react-loadable';
import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import  HomePage  from './HomePage';
import Navbar from './HomePage/components/Navbar';
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
            <Route exact path="/" component={HomePage} />
            <RegistrationWrapper>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/:songId" component={SongDetails} />
            </RegistrationWrapper>
        </Switch>
        </BrowserRouter>
)
