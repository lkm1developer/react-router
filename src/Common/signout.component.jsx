import React, { Component } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
class SignOut extends Component {
    componentWillMount() {
       
        reactLocalStorage.clear();
         browserHistory.push('/');
       
      }
    
    render() {
        return (<div> SignOut Successfully</div>);
    }
  
}

    export default SignOut