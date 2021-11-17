import React, { useState } from 'react'
import Head from '../../components/Head'
import Nav1 from '../../components/Nav1'
import 'bootstrap/dist/css/bootstrap.css'
import preVoting from '../../ethereum/preVoting'
import web3 from '../../ethereum/web3'
import { Card } from 'semantic-ui-react';

export default function electionscreen() {

    const [cname, setCname] = useState('');
    var [cand, setCand] = useState([]);
    const [vaddress, setVaddress] = useState('')

    const addCandidate = async () => {
        if (cname == "") {
            alert("Please Enter Candidate Name");
            return;
        }
        try {
            const accounts = await web3.eth.getAccounts();
            await preVoting.methods.add_candidate(cname).send({
                from: accounts[0],
            });
        }
        catch (err) {
            alert("Error while adding Candidate");
        }
        const cList = [];
        let cno = 0;
        cno = await preVoting.methods.get_number_of_candidates().call();
        for (let i = 0; i < cno; i++) {
            const name = await preVoting.methods.getCandidatesNames(i).call();
            // console.log(name);
            cList.push(name);
        }
        var items = [];
        for (let i = 0; i < cno; i++) {
            // console.log(cList[i]);
            items.push({
                header: `${i + 1}. ${cList[i]}`,
                // description: `${a[i]}`,
                // description: (
                //     <div className="d-inline-block px-md-5">
                //         <input className="form-check-input" type="checkbox" id="inlineCheckbox1" onClick={() => { inc(i) }} value="option1" />
                //         <label className="form-check-label" htmlFor="inlineCheckbox"></label>
                //     </div>
                // ),
                fluid: true

            });
        }
        setCand(items);
    }

    const addVoters = async () => {
        if (vaddress == "") {
            alert("Please Enter Voters Metamask Address");
            return;
        }
        try {
            const accounts = await web3.eth.getAccounts();
            await preVoting.methods.give_voting_rights(vaddress).send({
                from: accounts[0],
            });
        }
        catch (err) {
            alert("Error while adding Voters");
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
            alert("Error in calculating votes");
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
            <Head />
            <Nav1 />
            <div className="container" style={{ marginTop: "50px" }}>


                <div className="container text-white mb-3 w-50" style={{ fontSize: "30px", verticalAlign: "middle" }}>
                    Preferntial Voting
                </div>

                <div className="input-group mb-3 w-50 container">
                    <input type="text" className="form-control" placeholder="Add Candidate name" value={cname} aria-label="Candidate Name" aria-describedby="button-addon2" onChange={(event) => setCname(event.target.value)} />
                    <button className="btn btn-outline-secondary text-white" type="button" id="button-addon2" onClick={addCandidate}>Add Candidate</button>
                </div>
                <div className="input-group mb-3 w-50 container">
                    <Card.Group items={cand} style={{ width: "100%" }} />
                </div>
                <div className="input-group mb-3 w-50 container">
                    <input type="text" className="form-control" placeholder="Voters Metamask adddress" value={vaddress} aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(event) => setVaddress(event.target.value)} />
                    <button className="btn btn-outline-secondary text-white" type="button" id="button-addon2" onClick={addVoters}>Give Voting Rights</button>
                </div>
                <div className="input-group mb-3 w-50 container" >
                    <button className="btn btn-outline-secondary text-white" type="button" id="button-addon2" onClick={calculateVotes}>Calculate Votes</button>
                </div>
                <div className="input-group mb-3 w-50 container">
                    <button className="btn btn-outline-secondary text-white" type="button" id="button-addon2" onClick={checkMajority}>Check Majority</button>
                </div>
            </div>
        </div>
    )
}