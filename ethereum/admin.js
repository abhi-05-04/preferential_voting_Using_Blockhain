import web3 from "./web3";
import compiledAdmin from './build/Admin.json';


const instance =  new web3.eth.Contract(
    JSON.parse(compiledAdmin.interface) ,
    '0xe968Ab4fA686D951896Ea4B4c8719B58d39c4689'
);

export default instance;