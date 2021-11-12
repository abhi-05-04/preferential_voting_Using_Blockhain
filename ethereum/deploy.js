const HDWalletProvider =require('truffle-hdwallet-provider');
const Web3=require('web3');
const prevoting =require('./build/PreVoting.json');

const provider=new HDWalletProvider(
	'work mosquito torch submit syrup toward remind inherit shock badge there tonight',
    'https://ropsten.infura.io/v3/878807d274414bf296727dcc8c2ab135'
);

const web3=new Web3(provider);

const deploy=async()=>{
	const accounts=await web3.eth.getAccounts();
	console.log(accounts[0]);

	const result=await new web3.eth.Contract(JSON.parse(prevoting.interface))
	.deploy({data: prevoting.bytecode})
	.send({gas:'5000000',gasPrice:'60000000000',from:accounts[0]});

	console.log(prevoting.interface);
	console.log('addres == ',result.options.address);
};

deploy();