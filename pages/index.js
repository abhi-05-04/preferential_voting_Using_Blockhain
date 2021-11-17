import React from 'react'
import Head from '../components/Head'
import Nav from '../components/Nav'
import 'bootstrap/dist/css/bootstrap.css'
import Image from '../public/Images/cant-waste-your-vote.png';
export default function index() {
    React.useEffect(()=>{
        window.addEventListener('load', function() {
            if (typeof web3 !== 'undefined') {
              console.log('web3 is enabled')
              if (web3.currentProvider.isMetaMask === true) {
                console.log('MetaMask is active')
              } else {
                alert("MetaMask is not available");
              }
            } else {
              alert("web3 is not found");
            }
        });
    })
    return (
        <div >
            <div>
                <div className="container">
                    <Head />
                    <Nav />
                    
                </div>
            </div>
            <div style={{ paddingTop: "1000px" }}>
                <img src={Image.src} className="img-fluid" alt="image" width="100%" />
            </div>
        </div>
    )
}