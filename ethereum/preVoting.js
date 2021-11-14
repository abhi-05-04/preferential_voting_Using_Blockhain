import web3 from "./web3";
import prevoting from './build/PreVoting.json';


const instance =  new web3.eth.Contract(
    JSON.parse(prevoting.interface) ,
    '0xcD51ad714b514515d3fF5D3Ee0957Ff19a1e739D'
);

export default instance;