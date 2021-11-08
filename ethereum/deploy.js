const HDWalletProvider =require('truffle-hdwallet-provider');
const Web3=require('web3');
const compiledAdmin =require('./build/Admin.json');

const provider=new HDWalletProvider(
	'topic soldier position ball satoshi letter impulse seat that cliff prosper raccoon',
    'https://ropsten.infura.io/v3/a5e7731293dd4ac69f778244c2b0a543'
);

const web3=new Web3(provider);

const deploy=async()=>{
	const accounts=await web3.eth.getAccounts();
	console.log(accounts[0]);

	const result=await new web3.eth.Contract(JSON.parse(compiledAdmin.interface))
	.deploy({data: compiledAdmin.bytecode})
	.send({gas:'5000000',gasPrice:'60000000000',from:accounts[0]});

	console.log(compiledAdmin.interface);
	console.log('addres == ',result.options.address);
};

deploy();