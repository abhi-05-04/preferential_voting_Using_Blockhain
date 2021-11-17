import router from 'next/router';
import React from 'react'
import preVoting from '../ethereum/preVoting';
import web3 from '../ethereum/web3';

const styling = {
    backgroundImage: "url('/Images/voting-background.jpg')",
    margin: "50px 0px",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
}

export default function Nav() {

    const adminRedirection = async () => {
        try {
            const accounts = await web3.eth.getAccounts();
            const manager = await preVoting.methods.organiser().call();
            if (accounts[0] == manager) {
                router.replace('/admin/electionscreen');
            }
            else {
                alert(
                    "You are not the Admin"
                );
                router.replace('/');
            }
        }
        catch (err) {
            console.log()
        }
    }

    const winnerRedirection = async () => {
        try {
            // const accounts = await web3.eth.getAccounts();
            const winner = await preVoting.methods.winner().call();
            if (winner == "") {
                router.replace('/winnerscreen');
            }
            else {
                alert(
                    "Election is not Ended"
                );
                router.replace('/');
            }
        }
        catch (err) {
            console.log()
        }
    }

    return (
        <body style={styling}>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <a className="navbar-brand text-primary" href="/" to={"/sign-in"}>Preferential Voting</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link text-primary" href="/liveelection">Voter Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-primary" onClick={adminRedirection}>Admin</a>
                            </li>
                            <li>
                                <a className="nav-link text-primary" onClick={winnerRedirection}>Winner</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col" style={{ verticalAlign: "middle" }}>
                </div>
            </nav>
        </body>
    )
}
