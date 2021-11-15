import React from 'react'
import Head from '../components/Head'
import Nav2 from '../components/Nav2'
import 'bootstrap/dist/css/bootstrap.css'
import preVoting from '../ethereum/preVoting';

export default function winnerscreen({wname}) {

    return (
        <div>
            <div className="container" style={{ marginTop: "100px" }}>
                <Head />
                <Nav2 />
            </div>

            <div class="text-center display-2 text-white">
                W
                inner : {wname}
            </div>
        </div>
    )
}

winnerscreen.getInitialProps = async() => {
    const wname = await preVoting.methods.winner().call();
    console.log(wname);
    return {wname};
}