import React from 'react';
// import Loadable from 'react-loadable';
import { BrowserRouter ,Route, Switch } from 'react-router-dom';
// import styled from 'styled-components';

import  HomePage  from './HomePage'



export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
        </Switch>
        </BrowserRouter>
)
