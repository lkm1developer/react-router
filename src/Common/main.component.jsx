import React, {Component} from 'react';
import { Link } from 'react-router';
import {reactLocalStorage} from 'reactjs-localstorage';
class Main extends Component {
    
    render(){
        const isLoggedIn = reactLocalStorage.getObject('user');

    let button = null;
    let buttonLogout = null;
    console.log(isLoggedIn.email);
    if (isLoggedIn.email) {
        button = <Link to="/profile">Hello {isLoggedIn.name} </Link>;
        buttonLogout = <li className="nav-item"><Link className="nav-link" to="/logout" activeClassName="active">logout</Link></li>;

    } else {
      button = <Link to="/signup">Sign Up Free</Link>;
    }
        return(
            <div>
                <header className="header_area animated sticky slideInDown">
        <div className="container-fluid">
            <div className="row align-items-center">
                {/* Menu Area Start */}
                <div className="col-12 col-lg-10">
                    <div className="menu_area">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            {/* Logo */}
                            <a className="navbar-brand" href="#">Ca.</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ca-navbar" aria-controls="ca-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                            {/* Menu Area */}
                            <div className="collapse navbar-collapse" id="ca-navbar">
                                <ul className="navbar-nav ml-auto" id="nav">
                                    <li className="nav-item active"><a className="nav-link" href="#home">Home</a></li>
                                    <li className="nav-item"><Link className="nav-link" to="/" activeClassName="active">Home</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/cars" activeClassName="active">Cars</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/about" activeClassName="active">About</Link></li>
                                {buttonLogout}
                                </ul>
                               
                            </div>
                        </nav>
                    </div>
                </div>
                {/* Signup btn */}
                <div className="col-12 col-lg-2">
                    <div className="sing-up-button d-none d-lg-block">
                    {button}
                      
                    </div>
                </div>
            </div>
        </div>
    </header>
                            
                                
                           
                <div className="containerr">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main