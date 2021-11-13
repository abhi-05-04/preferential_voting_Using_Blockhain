import React, {useState} from 'react'
import Head from '../../components/Head'
import Nav from '../../components/Nav'
import 'bootstrap/dist/css/bootstrap.css'
import preVoting from '../../ethereum/preVoting'

export default function electionscreen() {

    const [cname, setCname] = useState('Candidate Name');

    const addCandidate = async() =>{
        try{
            const accounts = await web3.eth.getAccounts();
            await preVoting.methods.add_candidate(cname).send({
                from: accounts[0],
            });
        }
        catch(err){
            console.log("You are not the admin");
        }
    }

    return (
        <div>
            <div className="container" style={{ marginTop: "50px" }}>
                <Head />
                <Nav />

                    <div class="container text-white mb-3 w-50" style={{ fontSize: "30px", verticalAlign: "middle" }}>
                        Elections Name
                    </div>
                {/*<div class="row">
                       <div class="col">
                </div>
                <div class="col">
                    <div>
                        <div className="card container" style={{marginTop: "10px", marginBottom: "10px"}}>
                            <div className="card-body">
                                <a className="nav-link" href="/admin/upcommingelection" style={{color: "Black"}}>
                                    <div class="row">
                                        <div class="col">
                                            Election Name
                                        </div>
                                        <div class="col">
                                            Time
                                        </div>
                                        <div class="col">
                                            Upcomming
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="card container" style={{marginTop: "10px", marginBottom: "10px"}}>
                            <div className="card-body">
                                <a className="nav-link" href="/admin/calculateresult" style={{color: "Black"}}>
                                    <div class="row">
                                        <div class="col">
                                            Election Name
                                        </div>
                                        <div class="col">
                                            Time
                                        </div>
                                        <div class="col">
                                            Completed
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="card container" style={{marginTop: "10px", marginBottom: "10px"}}>
                            <div className="card-body">
                                <div class="row">
                                        <div class="col">
                                            Election Name
                                        </div>
                                        <div class="col">
                                            Time
                                        </div>
                                        <div class="col">
                                            Live
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
            </div>
                </div> */}
                <div class="input-group mb-3 w-50 container">
                    <input type="text" class="form-control" placeholder="Add Candidate name" value={cname} aria-label="Candidate Name" aria-describedby="button-addon2" onChange={(event) => setCname(event.target.value)}/>
                    <button class="btn btn-outline-secondary text-white" type="button" id="button-addon2" onClick={addCandidate}>Add Candidate</button>
                </div>
                <div class="input-group mb-3 w-50 container">
                    <input type="text" class="form-control" placeholder="voters metamask adddress" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-secondary text-white" type="button" id="button-addon2">Give Voting Rights</button>
                </div>
                <div class="input-group mb-3 w-50 container" >
                    {/* <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/> */}
                    <button class="btn btn-outline-secondary text-white" type="button" id="button-addon2">Calculate Votes</button>
                </div>
                <div class="input-group mb-3 w-50 container">
                    {/* <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/> */}
                    <button class="btn btn-outline-secondary text-white" type="button" id="button-addon2">Check Majority</button>
                </div>
            </div>
        </div>
    )
}
