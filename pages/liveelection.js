import React from 'react'
import { useState } from 'react';
import Head from '../components/Head'
// import Nav from '../components/Nav'
import 'bootstrap/dist/css/bootstrap.css'
import preVoting from '../ethereum/preVoting';
const styling = {
    backgroundImage: "url('/Images/voting-background.jpg')",
    backgroundSize: "cover",
    repeat: "no-repeat"
}
// let i = 0;
// const alertFunction = () => {
//     i = document.getElementById("inlineCheckbox1").value;
//     console.log(i);
// }
export default function liveelection() {

    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1);
    };

    return (

        <body style={styling}>
            <div className="container" >
                <Head />
                {/* <Nav/>    */}
            </div>
            <div className="row">
                <div className="col">
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col text-white" style={{ fontSize: "30px", verticalAlign: "middle" }}>
                            Elections Name
                        </div>
                        <div class="col" style={{ verticalAlign: "middle" }}>
                            <button type="submit" className="btn btn-primary btn-block">
                                <a className="nav-link" href="" style={{ color: "White" }}>Winner</a>
                            </button>
                        </div>
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
                        <div className="card container" style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <div className="card-body">
                                <div className="d-flex mx-md-n5 ">
                                    <div className="d-inline-block px-md-5">
                                        Candidate Name
                                    </div>

                                    {/* <div className="col">
                                        <input  className="form-control" placeholder="Number" />
                                    </div> */}
                                    <div classNmae="d-inline-block px-md-5">
                                        <input classNmae="form-check-input" type="checkbox" id="inlineCheckbox1" onChange={inc} value="option1" />
                                        <label classNmae="form-check-label" for="inlineCheckbox"><p id="testing">{count}</p></label>
                                        {/* <input type="number" value={count} /> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card container" style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <div className="card-body">
                                <div className="d-flex mx-md-n5 ">
                                    <div className="d-inline-block px-md-5">
                                        Candidate Name
                                    </div>

                                    {/* <div className="col">
                                        <input  className="form-control" placeholder="Number" />
                                    </div> */}
                                    <div classNmae="d-inline-block px-md-5">
                                        <input classNmae="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" />
                                        <label classNmae="form-check-label" for="inlineCheckbox2">1</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card container" style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <div className="card-body">
                                <div className="d-flex mx-md-n5 ">
                                    <div className="d-inline-block px-md-5">
                                        Candidate Name
                                    </div>

                                    {/* <div className="col">
                                        <input  className="form-control" placeholder="Number" />
                                    </div> */}
                                    <div classNmae="d-inline-block px-md-5">
                                        <input classNmae="form-check-input" type="checkbox" id="inlineCheckbox3" value="option1" />
                                        <label classNmae="form-check-label" for="inlineCheckbox3">1</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card container" style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <div className="card-body">
                                <div className="d-flex mx-md-n5 ">
                                    <div className="d-inline-block px-md-5">
                                        Candidate Name
                                    </div>

                                    {/* <div className="col">
                                        <input  className="form-control" placeholder="Number" />
                                    </div> */}
                                    <div classNmae="d-inline-block px-md-5">
                                        <input classNmae="form-check-input" type="checkbox" id="inlineCheckbox4" value="option1" />
                                        <label classNmae="form-check-label" for="inlineCheckbox4">1</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <div className="card container" style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        Candidate Name
                                    </div>

                                    <div className="col">
                                        <input className="form-control" placeholder="Number" />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="card container" style={{ marginTop: "10px", marginBottom: "10px" }}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        Candidate Name
                                    </div>
                                    <div className="col">
                                        <input className="form-control" placeholder="Number" />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="col">
                </div>
            </div>
            <div className="row">
                <div className="col">
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-primary btn-block">
                        Vote
                    </button>
                </div>
                <div className="col">
                </div>
            </div>
        </body>
    )
}
