import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ElectionScreen from './electionscreen.component';

export default class Login extends Component {
    render() {
        return (

            <Router>
                <Switch>
                    <Route path="/">
                        <form>
                        <h3>Sign In</h3>
                        <div className="form-group">
                            <label>Adhaar Number</label>
                            <input  className="form-control" placeholder="Enter Adhaar No." />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">
                            <Link className="nav-link" to={"/electionscreen"}>Log In</Link>
                        </button>
                        <p className="forgot-password text-right">
                            Forgot <a href="\">password?</a>
                        </p>
                        </form>
                    </Route>
                </Switch>
                

                <Switch>
                        <Route path="/electionscreen" component={ElectionScreen}/>
                </Switch>  
                
          </Router>
        );
    }
}