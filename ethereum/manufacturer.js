import web3 from "./web3";
import Manufacturer from './build/Manufacturer.json';

const manufacturer = (address)=>{
    const instance =  new web3.eth.Contract(
        JSON.parse(Manufacturer.interface) ,
        address
    );
    return instance;
}

export default manufacturer;