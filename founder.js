// SMART CONTRACT DETAILS

const rewardProgramAddress = '0x9724cC3Beff4316dfdeA0533c4ba5eC6C7E809e7'

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

// EXECUTE ON LOAD

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
      var verifiedAdd = await rewardProgramContract.methods.verifiedAddress().call();
      var verifiedAddLowerCase = verifiedAdd.toLowerCase();	 
      var checkStatus = await rewardProgramContract.methods.isVerified().call();

      var perk0status = await rewardProgramContract.methods.amountPerk(0).call();
          if (perk0status == 0) {
             document.getElementById("redeem-perk0").style.color = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk0").style.borderColor = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk0").disabled = true;
             document.getElementById("redeem-perk0").style.pointerEvents = "none";
          }  

      var perk1status = await rewardProgramContract.methods.amountPerk(1).call();
          if (perk1status == 0) {
             document.getElementById("redeem-perk1").style.color = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk1").style.borderColor = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk1").disabled = true;
             document.getElementById("redeem-perk1").style.pointerEvents = "none";
          }  

      var perk2status = await rewardProgramContract.methods.amountPerk(2).call();
          if (perk2status == 0) {
             document.getElementById("redeem-perk2").style.color = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk2").style.borderColor = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk2").disabled = true;
             document.getElementById("redeem-perk2").style.pointerEvents = "none";
          } 

      var perk3status = await rewardProgramContract.methods.amountPerk(3).call();
          if (perk3status == 0) {
             document.getElementById("redeem-perk3").style.color = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk3").style.borderColor = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk3").disabled = true;
             document.getElementById("redeem-perk3").style.pointerEvents = "none";
          }  

      var perk4status = await rewardProgramContract.methods.amountPerk(4).call();
          if (perk4status == 0) {
             document.getElementById("redeem-perk4").style.color = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk4").style.borderColor = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk4").disabled = true;
             document.getElementById("redeem-perk4").style.pointerEvents = "none";
          }  

      var perk5status = await rewardProgramContract.methods.amountPerk(5).call();
          if (perk5status == 0) {
             document.getElementById("redeem-perk5").style.color = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk5").style.borderColor = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk5").disabled = true;
             document.getElementById("redeem-perk5").style.pointerEvents = "none";
          }  

      var perk6status = await rewardProgramContract.methods.amountPerk(6).call();
          if (perk6status == 0) {
             document.getElementById("redeem-perk6").style.color = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk6").style.borderColor = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk6").disabled = true;
             document.getElementById("redeem-perk6").style.pointerEvents = "none";
          }  

      var perk7status = await rewardProgramContract.methods.amountPerk(7).call();
          if (perk7status == 0) {
             document.getElementById("redeem-perk7").style.color = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk7").style.borderColor = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk7").disabled = true;
             document.getElementById("redeem-perk7").style.pointerEvents = "none";
          } 


      var perk8status = await rewardProgramContract.methods.amountPerk(8).call();
          if (perk8status == 0) {
             document.getElementById("redeem-perk8").style.color = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk8").style.borderColor = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk8").disabled = true;
             document.getElementById("redeem-perk8").style.pointerEvents = "none";
          } 

      var perk9status = await rewardProgramContract.methods.amountPerk(9).call();
          if (perk9status == 0) {
             document.getElementById("redeem-perk9").style.color = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk9").style.borderColor = "var(--dl-color-gray-500)";
             document.getElementById("redeem-perk9").disabled = true;
             document.getElementById("redeem-perk9").style.pointerEvents = "none";
          } 

      if (nftOwnerLowerCase === activeAddressLowerCase) {
          if ((verifiedAddLowerCase !== activeAddressLowerCase) || (checkStatus == false)) {
            document.getElementById("founder-page-state2-container").style.display = "inherit";
            document.getElementById("founder-page-state1-container").style.display = "none";

            document.getElementById("redeem-perk0").style.color = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk0").style.borderColor = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk0").disabled = true;
            document.getElementById("redeem-perk0").style.pointerEvents = "none";

            document.getElementById("redeem-perk1").style.color = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk1").style.borderColor = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk1").disabled = true;
            document.getElementById("redeem-perk1").style.pointerEvents = "none";

            document.getElementById("redeem-perk2").style.color = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk2").style.borderColor = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk2").disabled = true;
            document.getElementById("redeem-perk2").style.pointerEvents = "none";

            document.getElementById("redeem-perk3").style.color = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk3").style.borderColor = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk3").disabled = true;
            document.getElementById("redeem-perk3").style.pointerEvents = "none";

            document.getElementById("redeem-perk4").style.color = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk4").style.borderColor = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk4").disabled = true;
            document.getElementById("redeem-perk4").style.pointerEvents = "none";

            document.getElementById("redeem-perk5").style.color = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk5").style.borderColor = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk5").disabled = true;
            document.getElementById("redeem-perk5").style.pointerEvents = "none";

            document.getElementById("redeem-perk6").style.color = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk6").style.borderColor = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk6").disabled = true;
            document.getElementById("redeem-perk6").style.pointerEvents = "none";

            document.getElementById("redeem-perk7").style.color = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk7").style.borderColor = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk7").disabled = true;
            document.getElementById("redeem-perk7").style.pointerEvents = "none";
  
            document.getElementById("redeem-perk8").style.color = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk8").style.borderColor = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk8").disabled = true;
            document.getElementById("redeem-perk8").style.pointerEvents = "none";

            document.getElementById("redeem-perk9").style.color = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk9").style.borderColor = "var(--dl-color-gray-500)";
            document.getElementById("redeem-perk9").disabled = true;
            document.getElementById("redeem-perk9").style.pointerEvents = "none";
          }
      	}
        else {
          window.location.href = "http://opensea.io";
        }
    }
	else {
      window.location.href = "http://opensea.io";
    }
})

// EXECUTE ON ACCOUNT CHANGE

window.ethereum.on('accountsChanged', function () {
  window.location.reload();
})

// EXECUTE ON CHAIN CHANGE

window.ethereum.on('chainChanged', function () {
  window.location.reload();
})

// REDEEM PERKS

const redeemPerk0 = document.getElementById('redeem-perk0');
redeemPerk0.onclick = async () => {
var web3 = new Web3(window.ethereum);
const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
rewardProgramContract.setProvider(window.ethereum);
await rewardProgramContract.methods.redeemPerk(0).send({from: ethereum.selectedAddress});
var perk0remaining = await rewardProgramContract.methods.amountPerk(0).call();
  if (perk0remaining == 0) {
     document.getElementById("redeem-perk0").style.color = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk0").style.borderColor = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk0").disabled = true;
     document.getElementById("redeem-perk0").style.pointerEvents = "none";
}
}

const redeemPerk1 = document.getElementById('redeem-perk1');
redeemPerk1.onclick = async () => {
var web3 = new Web3(window.ethereum);
const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
rewardProgramContract.setProvider(window.ethereum);
await rewardProgramContract.methods.redeemPerk(1).send({from: ethereum.selectedAddress});
var perk1remaining = await rewardProgramContract.methods.amountPerk(1).call();
  if (perk1remaining == 0) {
     document.getElementById("redeem-perk1").style.color = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk1").style.borderColor = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk1").disabled = true;
     document.getElementById("redeem-perk1").style.pointerEvents = "none";
}
}

const redeemPerk2 = document.getElementById('redeem-perk2');
redeemPerk2.onclick = async () => {
var web3 = new Web3(window.ethereum);
const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
rewardProgramContract.setProvider(window.ethereum);
await rewardProgramContract.methods.redeemPerk(2).send({from: ethereum.selectedAddress});
var perk2remaining = await rewardProgramContract.methods.amountPerk(2).call();
  if (perk2remaining == 0) {
     document.getElementById("redeem-perk2").style.color = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk2").style.borderColor = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk2").disabled = true;
     document.getElementById("redeem-perk2").style.pointerEvents = "none";
}
}

const redeemPerk3 = document.getElementById('redeem-perk3');
redeemPerk3.onclick = async () => {
var web3 = new Web3(window.ethereum);
const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
rewardProgramContract.setProvider(window.ethereum);
await rewardProgramContract.methods.redeemPerk(3).send({from: ethereum.selectedAddress});
var perk3remaining = await rewardProgramContract.methods.amountPerk(3).call();
  if (perk3remaining == 0) {
     document.getElementById("redeem-perk3").style.color = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk3").style.borderColor = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk3").disabled = true;
     document.getElementById("redeem-perk3").style.pointerEvents = "none";
}
}

const redeemPerk4 = document.getElementById('redeem-perk4');
redeemPerk4.onclick = async () => {
var web3 = new Web3(window.ethereum);
const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
rewardProgramContract.setProvider(window.ethereum);
await rewardProgramContract.methods.redeemPerk(4).send({from: ethereum.selectedAddress});
var perk4remaining = await rewardProgramContract.methods.amountPerk(4).call();
  if (perk4remaining == 0) {
     document.getElementById("redeem-perk4").style.color = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk4").style.borderColor = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk4").disabled = true;
     document.getElementById("redeem-perk4").style.pointerEvents = "none";
}
}

const redeemPerk5 = document.getElementById('redeem-perk5');
redeemPerk5.onclick = async () => {
var web3 = new Web3(window.ethereum);
const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
rewardProgramContract.setProvider(window.ethereum);
await rewardProgramContract.methods.redeemPerk(5).send({from: ethereum.selectedAddress});
var perk5remaining = await rewardProgramContract.methods.amountPerk(5).call();
  if (perk5remaining == 0) {
     document.getElementById("redeem-perk5").style.color = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk5").style.borderColor = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk5").disabled = true;
     document.getElementById("redeem-perk5").style.pointerEvents = "none";
}
}

const redeemPerk6 = document.getElementById('redeem-perk6');
redeemPerk6.onclick = async () => {
var web3 = new Web3(window.ethereum);
const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
rewardProgramContract.setProvider(window.ethereum);
await rewardProgramContract.methods.redeemPerk(6).send({from: ethereum.selectedAddress});
var perk6remaining = await rewardProgramContract.methods.amountPerk(6).call();
  if (perk6remaining == 0) {
     document.getElementById("redeem-perk6").style.color = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk6").style.borderColor = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk6").disabled = true;
     document.getElementById("redeem-perk6").style.pointerEvents = "none";
}
}

const redeemPerk7 = document.getElementById('redeem-perk7');
redeemPerk7.onclick = async () => {
var web3 = new Web3(window.ethereum);
const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
rewardProgramContract.setProvider(window.ethereum);
await rewardProgramContract.methods.redeemPerk(7).send({from: ethereum.selectedAddress});
var perk7remaining = await rewardProgramContract.methods.amountPerk(7).call();
  if (perk7remaining == 0) {
     document.getElementById("redeem-perk7").style.color = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk7").style.borderColor = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk7").disabled = true;
     document.getElementById("redeem-perk7").style.pointerEvents = "none";
}
}

const redeemPerk8 = document.getElementById('redeem-perk8');
redeemPerk8.onclick = async () => {
var web3 = new Web3(window.ethereum);
const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
rewardProgramContract.setProvider(window.ethereum);
await rewardProgramContract.methods.redeemPerk(8).send({from: ethereum.selectedAddress});
var perk8remaining = await rewardProgramContract.methods.amountPerk(8).call();
  if (perk8remaining == 0) {
     document.getElementById("redeem-perk8").style.color = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk8").style.borderColor = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk8").disabled = true;
     document.getElementById("redeem-perk8").style.pointerEvents = "none";
}
}

const redeemPerk9 = document.getElementById('redeem-perk9');
redeemPerk9.onclick = async () => {
var web3 = new Web3(window.ethereum);
const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
rewardProgramContract.setProvider(window.ethereum);
await rewardProgramContract.methods.redeemPerk(9).send({from: ethereum.selectedAddress});
var perk9remaining = await rewardProgramContract.methods.amountPerk(9).call();
  if (perk9remaining == 0) {
     document.getElementById("redeem-perk9").style.color = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk9").style.borderColor = "var(--dl-color-gray-500)";
     document.getElementById("redeem-perk9").disabled = true;
     document.getElementById("redeem-perk9").style.pointerEvents = "none";
}
}

//SET SECURITY ID

const activateButton = document.getElementById("activateButtonClick");
activateButton.onclick = async () => {
	var web3 = new Web3(window.ethereum);
	const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
	rewardProgramContract.setProvider(window.ethereum);
	const securityIdValue = document.getElementById("securityIdInput").value;
	await rewardProgramContract.methods.setSecurityID(securityIdValue).send({from: ethereum.selectedAddress});
}
