import React from 'react'
import Head from '../components/Head'
import Nav from '../components/Nav'
import 'bootstrap/dist/css/bootstrap.css'

export default function signup() {
    var fullname;
    var adhaarno;
    function RegisterUser()  {
        fullname = document.getElementById('name1').value;
        adhaarno = document.getElementById('adhaarno').value;
    }


    return (
        <div>
            <div className="container" style={{marginTop: "50px"}}>
                <Head/>
                <Nav/>   
            </div>
            <div className="row">
                <div className="col">
                </div>
                <div className="col">
                <form>
                        <h3>Register</h3>

                        <div className="form-group">
                            <label style={{marginTop: "10px", marginBottom: "10px"}}>Full Name</label>
                            <input type="text" id="name1" className="form-control" placeholder="First name" style={{marginTop: "10px", marginBottom: "10px"}}/>
                        </div>

                        <div className="form-group">
                            <label style={{marginTop: "10px", marginBottom: "10px"}}>Adhaar Number</label>
                            <input type="text" id="adhaarno" className="form-control" placeholder="Enter email" style={{marginTop: "10px", marginBottom: "10px"}}/>
                        </div>

                        {/* <div className="form-group">
                            <label style={{marginTop: "10px", marginBottom: "10px"}}>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" style={{marginTop: "10px", marginBottom: "10px"}}/>
                        </div>

                        <div className="form-group">
                            <label style={{marginTop: "10px", marginBottom: "10px"}}>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Confirm password" style={{marginTop: "10px", marginBottom: "10px"}}/>
                        </div> */}

                        

                        <button type="submit" onClick={RegisterUser} className="btn btn-primary btn-block" style={{marginTop: "10px", marginBottom: "10px"}}>
                            <a className="nav-link" href={`\\verify?name:${fullname}&adhaarno:${adhaarno}`} style={{color: "White"}}>Register</a>
                        </button>
                        <p className="forgot-password text-right" style={{marginTop: "10px", marginBottom: "10px"}}>
                            Already registered <a href="\electionscreen">Log In?</a>
                        </p>
                    </form>
                </div>
                <div className="col">
                </div>
            </div>
        </div>
    )
}
