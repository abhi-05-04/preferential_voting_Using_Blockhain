import web3 from "./web3";
import prevoting from './build/PreVoting.json';


const instance =  new web3.eth.Contract(
    JSON.parse(prevoting.interface) ,
    '0x4b5366e4C750A9dEfBffAc644Cad1caF036C83bF'
);

export default instance;