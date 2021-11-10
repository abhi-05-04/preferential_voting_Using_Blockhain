import React from 'react'
import Head from '../components/Head'
import Nav from '../components/Nav'
import 'bootstrap/dist/css/bootstrap.css'


import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Admin from '../ethereum/admin'
import Manufacturer from '../ethereum/manufacturer';
import web3 from '../ethereum/web3';
import Message from '../components/Message';
import { route } from 'next/dist/server/router';


export default function index() {
    return (
        <div className="container" style={{backgroundColor: "Yellow"}}>
            <Head/>
            <div className="App">
            <Nav/>
        </div>
    </div>
    )
}
