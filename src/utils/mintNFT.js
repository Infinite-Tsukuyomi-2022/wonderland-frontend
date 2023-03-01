import { contractChainId, nftPrice } from '../contract';
import { ethers } from 'ethers';
import { mint_function, contract_address } from '../contract';
import Web3 from 'web3/dist/web3.min.js'

const web3 = new Web3(Web3.givenProvider);
const contractABI = require('../contract/contract-abi.json');

function chainMapping(id){
  let name = '';
  let url = '';
  switch (id) {
    case (id === "0x1"):
      name = 'Mainnet';
      url = 'https://etherscan.io/';
      break;
    case (id === "0x3"):
      name = 'Ropsten Test Network';
      url = 'https://ropsten.etherscan.io/';
      break;
    case (id === "0x4"):
      name = 'Rinkeby Test Network';
      url = 'https://rinkeby.etherscan.io/';
      break;
    case (id === "0x5"):
      name = 'Goerli Test Network';
      url = 'https://goerli.etherscan.io/';
      break;
    case (id === "0x2a"):
      name = 'Kovan Test Network';
      url = 'https://kovan.etherscan.io/';
    default:
      name = '';
      url = '';
  }
  return { name, url };
}

function getTransactionParams(amount) {
  const currentContract = new web3.eth.Contract(contractABI, contract_address);

  const data = currentContract.methods[mint_function](parseInt(amount)).encodeABI();

  return {
    to: contract_address,
    from: window.ethereum?.selectedAddress,
    value: ethers.utils.hexlify(
        ethers.utils.parseEther((parseInt(amount) * nftPrice).toString())
      ).slice(2).replace(/^0+/, ''),
  
    // TODO: NFT mint method here
    data: data,
    chainId: contractChainId,
  }
}

export const mintNFT = async (amount) => {
  let message = '';
  if (contract_address !== contractChainId) {
    const { name } = chainMapping(contractChainId);
    message = `You should be using ${name}.`;
  }

  const transactionParams = getTransactionParams(amount);

  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParams],
    });

    const { url } = chainMapping(contract_address);
    message = `checkout out on ${url}tx/${txHash} later.`
    
  }
  catch (err) {
    message = `something went wrong: ${err.message}`;
  }

  return { message };
};
