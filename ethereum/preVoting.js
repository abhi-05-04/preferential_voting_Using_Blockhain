import web3 from "./web3";
import prevoting from './build/PreVoting.json';


const instance =  new web3.eth.Contract(
    JSON.parse(prevoting.interface) ,
    '0x2e894C5e08987edacAcCEeFEe63148DCc026aBe2'
);

export default instance;