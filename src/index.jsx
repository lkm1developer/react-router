

import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import SignUp from './common/signup.component.jsx'
import SignOut from './common/signout.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'
import CarDetailEdit from './car/car-edit.component.jsx'
import CarEdit from './car/car-edit.jsx'







    
render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/cars" component={Car} />
            {/* Parameter route*/}
            <Route path="/cars/:id" component={CarDetail} />
            <Route path="/cars/edit/:id" component={CarEdit} />
            <Route path="/about" component={About}/>
        
            <Route path="/signup" component={SignUp}/>
        
            <Route path="/logout" component={SignOut}/>
        
        </Route>
    </Router>,
    document.getElementById('container')
);
