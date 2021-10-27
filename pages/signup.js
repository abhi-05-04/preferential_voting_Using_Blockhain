import React from 'react'
import Head from '../components/Head'
import Nav from '../components/Nav'
import 'bootstrap/dist/css/bootstrap.css'

export default function signup() {
    return (
        <div>
            <div className="container" style={{marginTop: "50px"}}>
                <Head/>
                <Nav/>   
            </div>
            <div class="row">
                <div class="col">
                </div>
                <div class="col">
                <form>
                        <h3>Register</h3>

                        <div className="form-group">
                            <label style={{marginTop: "10px", marginBottom: "10px"}}>Full Name</label>
                            <input type="text" className="form-control" placeholder="First name" style={{marginTop: "10px", marginBottom: "10px"}}/>
                        </div>

                        <div className="form-group">
                            <label style={{marginTop: "10px", marginBottom: "10px"}}>Adhaar Number</label>
                            <input type="email" className="form-control" placeholder="Enter email" style={{marginTop: "10px", marginBottom: "10px"}}/>
                        </div>

                        <div className="form-group">
                            <label style={{marginTop: "10px", marginBottom: "10px"}}>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" style={{marginTop: "10px", marginBottom: "10px"}}/>
                        </div>

                        <div className="form-group">
                            <label style={{marginTop: "10px", marginBottom: "10px"}}>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Confirm password" style={{marginTop: "10px", marginBottom: "10px"}}/>
                        </div>

                        

                        <button type="submit" className="btn btn-primary btn-block" style={{marginTop: "10px", marginBottom: "10px"}}>
                            <a className="nav-link" href="/electionscreen" style={{color: "White"}}>Register</a>
                        </button>
                        <p className="forgot-password text-right" style={{marginTop: "10px", marginBottom: "10px"}}>
                            Already registered <a href="\electionscreen">Log In?</a>
                        </p>
                    </form>
                </div>
                <div class="col">
                </div>
            </div>
        </div>
    )
}
