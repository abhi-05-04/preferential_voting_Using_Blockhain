pragma solidity ^0.4.17 ;



// Comments must be implemented further
contract Admin{
    address[] public listManufacturers;
    address public superHost;
    mapping(address=>bool) public isManufacturer;
    mapping(address=>address) public getContractId;

     
    modifier restricted(){
         require(msg.sender == superHost);
         _;
    }
    
    function Admin() public{
        superHost = msg.sender;
    }
    function addManufacturer(string cname,string cproduct,string ctag) public {
        address newManufacturer = new Manufacturer( cname, cproduct, ctag,msg.sender);
        // address newManufacturer = msg.sender;
        listManufacturers.push(newManufacturer);
        isManufacturer[msg.sender] = true;
        getContractId[msg.sender] = newManufacturer;
    }
    
    function getListOfManufacturers() view public returns(address[]){
        return listManufacturers;
    }
    
    function removeManufacturer(address manToRemove) public {
        isManufacturer[manToRemove] = false;
        getContractId[manToRemove] = 0x0000000000000000000000000000000000000000;
    }
}




 contract Manufacturer{
    struct Company{
        address companyAddress;
        string name;
        string product;
        string tag;
        uint productCount;
    }
    
    struct Product{
        string feature;
        uint price;
        bool sold;
        string retailer;
        address customer;
    }
    
    Company public thisCampany;
    string[] public productNames;
    mapping(uint =>Product[]) public listingProducts;
    
    
    modifier restricted(){
         require(msg.sender == thisCampany.companyAddress);
         _;
    }
    
    function Manufacturer(string cname,string cproduct,string ctag,address manager)public{
        thisCampany = Company(manager,cname,cproduct,ctag,0);
    }
    
    function launchProduct(string name) public  restricted{
        productNames.push(name);
        thisCampany.productCount++;
    }
    function addProduct(uint product,uint price ,string cfeature) restricted public{
        Product memory newProduct = Product(cfeature,price , false ,
        '0x0000000000000000000000000000000000000000',
        0x0000000000000000000000000000000000000000);
        listingProducts[product].push(newProduct);
    }
    
    function updateCompany(string cname,string cproduct,string ctag) restricted public {
        thisCampany.name = cname;
        thisCampany.product = cproduct;
        thisCampany.tag = ctag;
    }
    
    function countLaunchedProducts() view public returns (uint){
        return thisCampany.productCount;
    }
    function countProductsAddedInLaunch(uint product) view public returns (uint){
        return listingProducts[product].length;
    }
    
    function updateProductSell(uint productNo,uint pr,string ret,address cust) public{
        Product[] storage productlist=listingProducts[productNo];
        productlist[pr].sold=true;
        productlist[pr].retailer=ret;
        productlist[pr].customer=cust;
    }
     function updateProductPrice(uint newprice,uint productNo,uint pr) restricted public{
        Product[] storage productlist=listingProducts[productNo];
        productlist[pr].price=newprice;
     }
 }
  