import React from 'react'
const styling = {
    backgroundImage: "url('/Images/voting-background.jpg')",
    backgroundSize: "cover",
}

export default function Nav() {
    return (
        <body style={styling}>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
            <a className="navbar-brand text-primary" href="/" to={"/sign-in"}>Preferential Voting</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link text-primary" href="/liveelection">Login</a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" href="/signup">Register</a>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link text-primary" href="/admin/electionscreen">Admin</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </body>
    )
}
