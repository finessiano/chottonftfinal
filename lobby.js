// contract address on Kovan:
const rewardProgramAddress = '0x9724cC3Beff4316dfdeA0533c4ba5eC6C7E809e7'

// add contract ABI:
const rewardProgramABI =

[
{
  "inputs": [
    {
      "internalType": "address",
      "name": "_nftAddress",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "_nftID",
      "type": "uint256"
    }
  ],
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "internalType": "address",
      "name": "redeemer",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "enum PerkManager.Perk",
      "name": "perk",
      "type": "uint8"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "date",
      "type": "uint256"
    }
  ],
  "name": "NewRedemption",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "address",
      "name": "previousOwner",
      "type": "address"
    },
    {
      "indexed": true,
      "internalType": "address",
      "name": "newOwner",
      "type": "address"
    }
  ],
  "name": "OwnershipTransferred",
  "type": "event"
},
{
  "inputs": [
    {
      "internalType": "enum PerkManager.Perk",
      "name": "_perk",
      "type": "uint8"
    }
  ],
  "name": "redeemPerk",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "internalType": "address",
      "name": "ownerOfNFT",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "newSecurityID",
      "type": "uint256"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "date",
      "type": "uint256"
    }
  ],
  "name": "securityIDchanged",
  "type": "event"
},
{
  "inputs": [
    {
      "internalType": "uint256",
      "name": "_securityID",
      "type": "uint256"
    }
  ],
  "name": "setSecurityID",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "newOwner",
      "type": "address"
    }
  ],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [],
  "name": "verifyAddress",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [],
  "name": "yearlyUpdate",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "enum PerkManager.Perk",
      "name": "",
      "type": "uint8"
    }
  ],
  "name": "amountPerk",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "deadline",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "isVerified",
  "outputs": [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "nftAddress",
  "outputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "nftID",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "owner",
  "outputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "ownerOfNft",
  "outputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "securityID",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "verifiedAddress",
  "outputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "stateMutability": "view",
  "type": "function"
}
]

window.addEventListener("load", async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
	await ethereum.request({
   	method: 'wallet_switchEthereumChain',
   	params: [{ chainId: '0x2a' }],
  	});
	await ethereum.request({ method: 'eth_requestAccounts'});
	const displayAddress = document.getElementById('mm-connect');
      	const activeAddress = ethereum.selectedAddress;
      	const activeAddressFirstFour = activeAddress.substring(0,5);
      	const activeAddressLastFour = activeAddress.substring(38,42);
      	displayAddress.innerHTML = activeAddressFirstFour + "..." + activeAddressLastFour;

	const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
        rewardProgramContract.setProvider(window.ethereum);
        var nftOwner = await rewardProgramContract.methods.ownerOfNft().call();
	var nftOwnerLowerCase = nftOwner.toLowerCase();
	var activeAddressLowerCase = activeAddress.toLowerCase();
	      
    	if (nftOwnerLowerCase === activeAddressLowerCase) {
    	  const changeButton = document.getElementById('myButton1');
	  changeButton.innerHTML = "Enter";
	  changeButton.href = "founder-page.html";
    	}
      }
})

window.ethereum.on('accountsChanged', function () {
  window.location.reload();
})

window.ethereum.on('chainChanged', function () {
  window.location.reload();
})

const mmEnable = document.getElementById('mm-connect');

mmEnable.onclick = async () => {
     if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
	await ethereum.request({
   	method: 'wallet_switchEthereumChain',
   	params: [{ chainId: '0x2a' }],
  	});
        await ethereum.request({ method: 'eth_requestAccounts'});
	const displayAddress = document.getElementById('mm-connect');
      	const activeAddress = ethereum.selectedAddress;
      	const activeAddressFirstFour = activeAddress.substring(0,5);
      	const activeAddressLastFour = activeAddress.substring(38,42);
      	displayAddress.innerHTML = activeAddressFirstFour + "..." + activeAddressLastFour;

	const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
        rewardProgramContract.setProvider(window.ethereum);
        var nftOwner = await rewardProgramContract.methods.ownerOfNft().call();
	var nftOwnerLowerCase = nftOwner.toLowerCase();
	var activeAddressLowerCase = activeAddress.toLowerCase();
	      
    	if (nftOwnerLowerCase === activeAddressLowerCase) {
    	  const changeButton = document.getElementById('myButton1');
	  changeButton.innerHTML = "Enter";
	  changeButton.href = "founder-page.html";
    	}
      }
}
