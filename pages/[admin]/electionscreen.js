import React, { useState } from 'react'
import Head from '../../components/Head'
import Nav1 from '../../components/Nav1'
import 'bootstrap/dist/css/bootstrap.css'
import preVoting from '../../ethereum/preVoting'
import web3 from '../../ethereum/web3'

export default function electionscreen() {

    const [cname, setCname] = useState('');

    const [vaddress, setVaddress] = useState('')

    const addCandidate = async () => {
        try {
            const accounts = await web3.eth.getAccounts();
            await preVoting.methods.add_candidate(cname).send({
                from: accounts[0],
            });
        }
        catch (err) {
            console.log("You are not the admin");
        }
    }

    const addVoters = async () => {
        try {
            const accounts = await web3.eth.getAccounts();
            await preVoting.methods.give_voting_rights(vaddress).send({
                from: accounts[0],
            });
        }
        catch (err) {
            console.log("Voter not added");
        }
    }

    const calculateVotes = async () => {
        try {
            const accounts = await web3.eth.getAccounts();
            await preVoting.methods.calculate_votes().send({
                from: accounts[0],
            });
        }
        catch (err) {
            console.log("Erroe in calculating votes");
        }
    }

    const checkMajority = async () => {
        try {
            const accounts = await web3.eth.getAccounts();
            await preVoting.methods.check_majority().send({
                from: accounts[0],
            });
        }
        catch (err) {
            console.log("Error in checking Majority");
        }
    }

    return (
        <div>
            
            <div className="container" style={{ marginTop: "50px" }}>
                <Head />
                <Nav1 />

                <div class="container text-white mb-3 w-50" style={{ fontSize: "30px", verticalAlign: "middle" }}>
                    Elections Name
                </div>

                <div class="input-group mb-3 w-50 container">
                    <input type="text" class="form-control" placeholder="Add Candidate name" value={cname} aria-label="Candidate Name" aria-describedby="button-addon2" onChange={(event) => setCname(event.target.value)} />
                    <button class="btn btn-outline-secondary text-white" type="button" id="button-addon2" onClick={addCandidate}>Add Candidate</button>
                </div>
                <div class="input-group mb-3 w-50 container">
                    <input type="text" class="form-control" placeholder="voters metamask adddress" value={vaddress} aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(event) => setVaddress(event.target.value)} />
                    <button class="btn btn-outline-secondary text-white" type="button" id="button-addon2" onClick={addVoters}>Give Voting Rights</button>
                </div>
                <div class="input-group mb-3 w-50 container" >
                    {/* <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/> */}
                    <button class="btn btn-outline-secondary text-white" type="button" id="button-addon2" onClick={calculateVotes}>Calculate Votes</button>
                </div>
                <div class="input-group mb-3 w-50 container">
                    {/* <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/> */}
                    <button class="btn btn-outline-secondary text-white" type="button" id="button-addon2" onClick={checkMajority}>Check Majority</button>
                </div>
            </div>
        </div>
    )
}