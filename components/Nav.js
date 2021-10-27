import React from 'react'

export default function Nav() {
    return (
        <body style={{backgroundColor: "lightblue"}}>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
            <a className="navbar-brand" to={"/sign-in"}>Preferential Voting</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/signup">Register</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/admin/login">Admin</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </body>
    )
}
