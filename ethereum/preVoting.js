import web3 from "./web3";
import prevoting from './build/PreVoting.json';


const instance =  new web3.eth.Contract(
    JSON.parse(prevoting.interface) ,
    '0x805F7ab347b6DFAfc5E573a51C3025458d0760F1'
);

export default instance;