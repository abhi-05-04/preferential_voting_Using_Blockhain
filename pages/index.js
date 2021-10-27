import React from 'react'
import Head from '../components/Head'
import Nav from '../components/Nav'
import 'bootstrap/dist/css/bootstrap.css'

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
