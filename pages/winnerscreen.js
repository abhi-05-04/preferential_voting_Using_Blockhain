import React from 'react'
import Head from '../components/Head'
import Nav2 from '../components/Nav2'
import 'bootstrap/dist/css/bootstrap.css'
import preVoting from '../ethereum/preVoting';

export default function winnerscreen({ wname }) {
    // const [accounts, setAccounts] = useState();
    // const [validated, setValidated] = useState('Not Set');
    // const [Authorized , setAuthorized] = useState(false);

    // useEffect(()=>{
    //     if(validated === 'Not Set') 
    //         getValidation();
    // },[]);
    // const getValidation = async()=>{
    //     let accounts = await web3.eth.getAccounts()
    //     // let superHost = await Admin.methods.superHost().call();
    //     // console.log(accounts[0] ," ",superHost)
    //     // if(accounts[0] == superHost)   setAuthorized(true);
    //     setValidated('Set');
    // }

    return (
        <div>
            <div className="container" style={{ marginTop: "100px" }}>
                <Head />
                <Nav2 />
            </div>

            <div className="text-center display-2 text-white">
                W
                inner : {wname}
            </div>
        </div>
    )

}

winnerscreen.getInitialProps = async () => {
    const wname = await preVoting.methods.winner().call();
    console.log(wname);
    return { wname };
}