import web3 from "./web3";
import prevoting from './build/PreVoting.json';


const instance =  new web3.eth.Contract(
    JSON.parse(prevoting.interface) ,
    '0xc3dD4654093d5245bE628239261cA4E3fd2A3a28'
);

export default instance;