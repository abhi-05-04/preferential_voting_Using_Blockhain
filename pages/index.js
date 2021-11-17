import React from 'react'
import Head from '../components/Head'
import Nav from '../components/Nav'
import 'bootstrap/dist/css/bootstrap.css'
import Image from '../public/Images/cant-waste-your-vote.png';
export default function index() {
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