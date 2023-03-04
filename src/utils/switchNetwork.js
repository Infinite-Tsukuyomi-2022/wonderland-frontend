import { contractChainId } from '../contract';
import Web3 from 'web3/dist/web3.min.js'

const web3 = new Web3(Web3.givenProvider);


export const switchNetwork = async () => {
  const currentChainId = await web3.eth.getChainId();
  // console.log('currentChainId: '+currentChainId);
  if (currentChainId !== contractChainId){
    try {
      await window.ethereum.request({
        method:'wallet_switchEthereumChain',
        params: [{chainId: Web3.utils.toHex(contractChainId)}]
      });
      console.log(`switched to chainid : ${contractChainId} succesfully`);
    }catch(err){
      if (err.code === 4902) {
        await addNetwork(polygonNetwork);
      }else{
        console.log(`error occured while switching chain to chainId ${contractChainId}, err: ${err.message} code: ${err.code}`);
      }
    }
  }
  }
  
const polygonNetwork = {
chainId: '0x89',
chainName: "Polygon Mainnet",
nativeCurrency: {
  name: "MATIC",
  symbol: "MATIC", // 2-6 characters long
  decimals: 18
},
rpcUrls: ["https://polygon-rpc.com/"],
blockExplorerUrls:["https://polygonscan.com/"]
}

async function addNetwork(networkDetails){
try{
  await window.ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [
      networkDetails
    ]
  });
}catch(err){
  console.log(`error ocuured while adding new chain with chainId:${networkDetails.chainId}, err: ${err.message}`)
}
}