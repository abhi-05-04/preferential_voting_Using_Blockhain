// import React from 'react'
// import { useState } from 'react';
// import Head from '../components/Head'
// import Nav1 from '../components/Nav1'
// import 'bootstrap/dist/css/bootstrap.css'
// import preVoting from '../ethereum/preVoting';
// import web3 from '../ethereum/web3';
// import { Card } from 'semantic-ui-react';

// const styling = {
//     backgroundImage: "url('/Images/voting-background.jpg')",
//     backgroundSize: "cover",
//     repeat: "no-repeat",
//     marginTop: "50px"
// }
// // let i = 0;
// // const alertFunction = () => {
// //     i = document.getElementById("inlineCheckbox1").value;
// //     console.log(i);
// // }



// // async function candidateSize() {

// // }

// // async function candidatenamesList() {

// // };

// // async function candidateList(){

// // }


// export default function liveelection({cno, cList}) {

//     const [count, setCount] = useState([]);
//     var a = [];
//     // var candiadte
//     const inc = (i)=> {
//         i=i+1
//         setCount([...count,
//             {
//                 id: count.length,
//                 value: i,
//             }
//         ]);
//         console.log(count);
//     }


//     const onSubmit = async () => {
//         try{
//             const accounts = await web3.eth.getAccounts();
//             await preVoting.methods.vote(a).send({
//                 from: accounts[0],
//             });
//         }
//         catch(err)
//         {
//             console.log()
//         }
//     }

//     let items=[];
//     for(let i = 0; i < cno; i++)
//     {
//         // console.log(cList[i]);

//         items.push({
//             header: `${i+1}. ${cList[i]}`,
//             // description: `${a[i]}`,
//             description: (
//                 <div className="d-inline-block px-md-5">
//                     <input className="form-check-input" type="checkbox" id="inlineCheckbox1" onClick={() => {inc(i)}} value="option1" />
//                     <label className="form-check-label" htmlFor="inlineCheckbox"><p id="testing">{count[i]}</p></label>

//                     {/* <input type="number" value={count} /> */}
//                 </div>
//             ),
//             fluid: true

//         });
//     }

//     return (

//         <div >
//             {/* style={styling} */}
//             <link
//                 rel="stylesheet"
//                 href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
//             />
//                 <Head />
//                 <Nav1/>   
//             <div className="row" style={{margin: "50px"}}>
//                 <div className="col">
//                 </div>
//                 <div className="col">
//                     <div className="row">
//                         <div className="col text-white" style={{ fontSize: "30px", verticalAlign: "middle" }}>
//                             Elections Name
//                         </div>
//                         <div className="col" style={{ verticalAlign: "middle" }}>
//                             <button type="submit" className="btn btn-primary btn-block">
//                                 <a className="nav-link" href="/winnerscreen" style={{ color: "White" }}>Winner</a>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col">
//                 </div>
//             </div>
//             <div className="row" style={{margin: "50px"}}>
//                 <div className="col">
//                 </div>
//                 <div className="col">
//                     <div>
//                         <Card.Group items={items} />
//                     </div>
//                 </div>
//                 <div className="col">
//                 </div>
//             </div>

//             <div className="row" style={{margin: "50px"}}>
//                 <div className="col">
//                 </div>
//                 <div className="col">
//                    <input type="text" />
//                 </div>
//                 <div className="col">
//                 </div>
//             </div>

//             <div className="row" style={{margin: "50px"}}>
//                 <div className="col">
//                 </div>
//                 <div className="col">
//                     <button type="submit" className="btn btn-primary btn-block" onClick={onSubmit}>
//                         Vote
//                     </button>
//                 </div>
//                 <div className="col">
//                 </div>
//             </div>
//         </div>
//     )
// }

// liveelection.getInitialProps = async() => {
//     const cList = [];
//     let cno = 0;
//     cno = await preVoting.methods.get_number_of_candidates().call();
//     // console.log(cno);
//     for(let i=0; i<cno ; i++)
//     {
//         const name = await preVoting.methods.getCandidatesNames(i).call();
//         // console.log(name);
//         cList.push(name);
//     }
//     // console.log(cList);
//     return {cno, cList};
// }







import React from 'react'
import { useState } from 'react';
import Head from '../components/Head'
import Nav from '../components/Nav'
import 'bootstrap/dist/css/bootstrap.css'
import preVoting from '../ethereum/preVoting';
import web3 from '../ethereum/web3';
import { Card } from 'semantic-ui-react';

const styling = {
    backgroundImage: "url('/Images/voting-background.jpg')",
    backgroundSize: "cover",
    repeat: "no-repeat",
    marginTop: "50px"
}


export default function liveelection({ cno, cList }) {

    async function Validation(val) {
        return new Promise((resolve, reject) => {
            // resolve('Success!');
            var votepreference = val;
            const votearray = votepreference.split(",");
            resolve(votearray);
        });
    }

    const onSubmit = async () => {
        try {
            // console.log(document.getElementById("voteme").value);
            Validation(document.getElementById("voteme").value).then(async (value) => {
                console.log(value)
                const accounts = await web3.eth.getAccounts();
                await preVoting.methods.vote(value).send({
                    from: accounts[0],
                });
            });

        }
        catch (err) {
            console.log()
        }
    }

    let items = [];
    for (let i = 0; i < cno; i++) {
        // console.log(cList[i]);

        items.push({
            header: `${i + 1}. ${cList[i]}`,
            fluid: true

        });
    }

    return (

        <div >
            <link
                rel="stylesheet"
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
            />
            <Head />
            <Nav />
            <div className="row" style={{ margin: "50px" }}>
                <div className="col">
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col text-white" style={{ fontSize: "30px", verticalAlign: "middle" }}>
                            Elections Name
                        </div>
                        <div className="col" style={{ verticalAlign: "middle" }}>
                            <button type="submit" className="btn btn-primary btn-block">
                                <a className="nav-link" href="" style={{ color: "White" }}>Winner</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col">
                </div>
            </div>
            <div className="row" style={{ margin: "50px" }}>
                <div className="col">
                </div>
                <div className="col">
                    <div>
                        <Card.Group items={items} />
                    </div>
                </div>
                <div className="col">
                </div>
            </div>

            <div className="row" style={{ margin: "50px" }}>
                <div className="col">
                </div>
                <div className="col">
                    <div className="input-group mb-3">
                        <input type="text" id="voteme" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
                        <div className="input-group-prepend">
                            <button onClick={onSubmit} className="btn btn-outline-secondary btn-primary" type="button">Vote</button>
                        </div>
                    </div>
                    <div className="text-danger h3">
                        Instructions:
                    </div>
                    <div className="text-light bg-secondary h4">
                        The preference shouldbe given in the following way
                        Give the candidate number to whome you you want to give the first preference and then the second candidate number. Such as
                        if candidate 3 is you fisrt preference and then candidate first then give the input as 3,1 and follows
                    </div>
                </div>
                <div className="col">
                </div>
            </div>

        </div>
    )
}

liveelection.getInitialProps = async () => {
    const cList = [];
    let cno = 0;
    cno = await preVoting.methods.get_number_of_candidates().call();
    // console.log(cno);
    for (let i = 0; i < cno; i++) {
        const name = await preVoting.methods.getCandidatesNames(i).call();
        // console.log(name);
        cList.push(name);
    }
    // console.log(cList);
    return { cno, cList };
}