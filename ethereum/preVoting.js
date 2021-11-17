import web3 from "./web3";
import prevoting from './build/PreVoting.json';


const instance =  new web3.eth.Contract(
    JSON.parse(prevoting.interface) ,
    '0x074fA400cD3980ccC339cdFa98402476CDA7Bd69'
);

export default instance;