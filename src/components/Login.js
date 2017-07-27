import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <div id="wrap">
                <div id="regbar">
                    <div id="navthing">
                    <h2><a href="#" id="loginform">Login</a> | <a href="#">Register</a></h2>
                    <div className="login">
                    <div className="arrow-up"></div>
                    <div className="formholder">
                        <div className="randompad">
                        <fieldset>
                            <label name="email">Email</label>
                            <input type="email"  />
                            <label name="password">Password</label>
                            <input type="password" />
                            <input type="submit" />
                
                        </fieldset>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Login;