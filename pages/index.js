import React from "react";
import Head from "../components/Head";
import Nav from "../components/Nav";
import "bootstrap/dist/css/bootstrap.css";
import Image from "../public/Images/cant-waste-your-vote.png";
import web3 from "../ethereum/web3";
export default function Index() {
  React.useEffect(() => {
    window.addEventListener("load", function () {
      if (typeof web3 !== "undefined") {
        console.log("web3 is enabled");
        if (web3.currentProvider.isMetaMask === true) {
          console.log("MetaMask is active");
        } else {
          alert("MetaMask is not available");
        }
      } else {
        alert("MetaMask is not Found Please Install");
      }
    });
  });
  return (
    <div>
      <div className="container">
        <Head />
        <Nav />
        <div className="text-white bg-muted float-end">
          <br />
          <br />
          <hr />

          <b>For the Voters:</b>
          <br />
          <ol type="1">
            <li>
              The Voters should have their metamask extension and an active
              metamask account with some ethers.
            </li>
            <br />
            <li>
              Also the metamask account that you have should be provided to the
              admin before the election.
            </li>
            <br />
            <li>
              After you click the Voters Login button you will be redirected to
              the live election page if above two instructions are valid.
            </li>
            <br />
            <li>
              In the live election screen you will see the candidates those are
              stood for the election with a checkbox below each name.
            </li>
            <br />
            <li>
              The voter should give their preference and then click on the vote
              button provided below it.
            </li>
            <br />
            <li>
              After that you will get a pop-up screen from the metamask
              extension. In that you should confirm the transaction otherwise
              your vote will not be counted.
            </li>
            <br />
            <li>
              {" "}
              In the navigation bar the winner button provides you the winner of
              the election after the election is ended.
            </li>
          </ol>
          <hr />
            <p>Scroll for more </p>
        </div>
      </div>

      <div style={{ paddingTop: "1000px" }}>
        <img src={Image.src} className="img-fluid" alt="image" width="100%" />
      </div>
    </div>
  );
}
