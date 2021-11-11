import React from 'react'
import Head from '../components/Head'
import Nav from '../components/Nav'
import 'bootstrap/dist/css/bootstrap.css'

export default function electionscreen() {
    return (
        <div>
            <div className="container" style={{marginTop: "50px"}}>
                <Head/>
                {/* <Nav/>    */}
            </div>
            <div className="row" style={{marginTop: "10px", marginBottom: "10px"}}>
                <div className="col">
                </div>
                <div className="col">
                    <div className="col text-white" style={{fontSize: "30px", verticalAlign: "middle"}}>
                        Elections Name
                    </div>
                </div>
                <div className="col">
                </div>
            </div>
            <div className="row">
                <div className="col">
                </div>
                <div className="col">
                    <div>
                        <div className="card container" style={{marginTop: "10px", marginBottom: "10px"}}>
                            <div className="card-body">
                                <a className="nav-link" href="/winnerscreen" style={{color: "Black"}}>
                                    <div className="row">
                                        <div className="col">
                                            Election Name
                                        </div>
                                        <div className="col">
                                            Time
                                        </div>
                                        <div className="col">
                                            Completed
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="card container" style={{marginTop: "10px", marginBottom: "10px"}}>
                            <div className="card-body">
                                <a className="nav-link" href="/liveelection" style={{color: "Black"}}>
                                    <div className="row">
                                        <div className="col">
                                            Election Name
                                        </div>
                                        <div className="col">
                                            Time
                                        </div>
                                        <div className="col">
                                            Live
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="card container" style={{marginTop: "10px", marginBottom: "10px"}}>
                            <div className="card-body">
                                <a className="nav-link" href="/upcommingelections" style={{color: "Black"}}>
                                    <div className="row">
                                        <div className="col">
                                            Election Name
                                        </div>
                                        <div className="col">
                                            Time
                                        </div>
                                        <div className="col">
                                            Upcomming
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                </div>
            </div>
        </div>
    )
}
