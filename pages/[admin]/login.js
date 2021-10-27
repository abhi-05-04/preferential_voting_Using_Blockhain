import React from 'react'
import Head from '../../components/Head'
import Nav from '../../components/Nav'
import 'bootstrap/dist/css/bootstrap.css'

export default function login() {
    return (
        <div>
            <div className="container" style={{marginTop: "50px"}}>
                <Head/>
                <Nav/>   
            </div>
            <div class="row">
                <div class="col">
                </div>
                <div class="col" style={{backgroundColor: "red"}}>
                    <form>
                        <h3>Sign In</h3>
                        <div className="form-group">
                            <label style={{marginTop: "10px", marginBottom: "10px"}}>User Name</label>
                            <input  className="form-control" placeholder="Enter User Name" style={{marginTop: "10px", marginBottom: "10px"}}/>
                        </div>
                        <div className="form-group">
                            <label style={{marginTop: "10px", marginBottom: "10px"}}>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" style={{marginTop: "10px", marginBottom: "10px"}}/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" style={{marginTop: "10px", marginBottom: "10px"}}>
                            <a className="nav-link" href="/admin/electionscreen" style={{color: "White"}}>Log In</a>
                        </button>
                        <p className="forgot-password text-right" style={{marginTop: "10px", marginBottom: "10px"}}>
                            Forgot <a href="\">password?</a>
                        </p>
                    </form>
                </div>
                <div class="col">
                </div>
            </div>
        </div>
    )
}
