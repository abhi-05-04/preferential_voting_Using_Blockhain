import React from 'react'
import Head from '../components/Head'
import Nav from '../components/Nav'
import 'bootstrap/dist/css/bootstrap.css'

export default function winnerscreen() {
    return (
        <div>
            <div className="container" style={{marginTop: "100px"}}>
                <Head/>
                <Nav/>   
            </div>
            <div class="row">
                <div class="col">
                </div>
                <div class="col">
                    <div>
                        <div className="card container" style={{marginTop: "20px", marginBottom: "20px"}}>
                            <div className="card-body">
                                <div style={{marginTop: "20px", marginBottom: "20px"}}>
                                    <div class="row" style={{marginTop: "20px", marginBottom: "20px"}}>
                                        <div class="col" style={{marginTop: "20px", marginBottom: "20px", fontSize: "20px"}}>
                                            Election Name
                                        </div>
                                        <div class="col" style={{marginTop: "20px", marginBottom: "20px"}}></div>
                                        <div class="col" style={{marginTop: "20px", marginBottom: "20px", fontSize: "20px"}}>
                                            Time
                                        </div>
                                    </div>
                                    <div class="row" style={{marginTop: "20px", marginBottom: "20px"}}>
                                        <div class="col" style={{marginTop: "20px", marginBottom: "20px"}}></div>
                                        <div class="col" style={{marginTop: "20px", marginBottom: "20px", fontSize: "20px"}}>
                                            Winner
                                        </div>
                                        <div class="col" style={{marginTop: "20px", marginBottom: "20px"}}></div>
                                    </div>
                                    <div class="row" style={{marginTop: "20px", marginBottom: "20px"}}>
                                        <div class="col" style={{marginTop: "20px", marginBottom: "20px"}}></div>
                                        <div class="col container" style={{marginTop: "20px", marginBottom: "20px", fontSize: "20px"}}>
                                            Winner Name
                                        </div>
                                        <div class="col" style={{marginTop: "20px", marginBottom: "20px"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                </div>
            </div>
        </div>
    )
}

