import React from 'react'
import Head from '../../components/Head'
import Nav from '../../components/Nav'
import 'bootstrap/dist/css/bootstrap.css'

export default function addelectionscreen() {
    return (
        <div>
            <div className="container" style={{marginTop: "50px"}}>
                <Head/>
                <Nav/>   
            </div>
            <div class="row" style={{marginTop: "10px", marginBottom: "10px"}}>
                <div class="col">
                </div>
                <div class="col">
                    <div class="row">
                        <div class="col" style={{fontSize: "30px", verticalAlign: "middle"}}>
                            Elections Name
                        </div>
                        <div class="col" style={{fontSize: "30px", verticalAlign: "middle"}}>
                            <input  className="form-control" placeholder="Enter Election Name" style={{marginTop: "10px", marginBottom: "10px"}}/>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <button type="submit" className="btn btn-primary btn-block">
                        <a className="nav-link" href="/admin/addelectionscreen" style={{color: "White"}}>Add Candidate</a>
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                </div>
                <div class="col">
                    <div>
                        <div className="card container" style={{marginTop: "10px", marginBottom: "10px"}}>
                            <div className="card-body">
                                <div class="row">
                                    <div class="col">
                                        Candidate Name
                                    </div>
                                    <div class="col">
                                        Logo
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card container" style={{marginTop: "10px", marginBottom: "10px"}}>
                            <div className="card-body">
                                <div class="row">
                                    <div class="col">
                                        Candidate Name
                                    </div>
                                    <div class="col">
                                        Logo
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card container" style={{marginTop: "10px", marginBottom: "10px"}}>
                            <div className="card-body">
                                <div class="row">
                                    <div class="col">
                                        Candidate Name
                                    </div>
                                    <div class="col">
                                        Logo
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                </div>
            </div>
            <div class="row">
                <div class="col">
                </div>
                <div class="col">
                    <button type="submit" className="btn btn-primary btn-block">
                        Submit
                    </button>
                </div>
                <div class="col">
                </div>
            </div>
        </div>
    )
}
