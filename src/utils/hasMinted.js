// import { contractChainId, nftPrice } from '../contract';
// import { ethers } from 'ethers';
import { contract_address } from '../contract';
import Web3 from 'web3/dist/web3.min.js'

const web3 = new Web3(Web3.givenProvider);
const contractABI = require('../contract/contract-abi.json');

export const hasMinted = async (account) => {
  const currentContract = new web3.eth.Contract(contractABI, contract_address);
  // let address = await window.ethereum.request({ method: 'eth_accounts' });
  // console.log(address);
  let quantity = await currentContract.methods.hasPSMinted(account).call();
  return { quantity };
};
