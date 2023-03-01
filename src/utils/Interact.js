import React from 'react';
import Web3 from 'web3';
import { ethers } from "ethers";
import dotenv from 'dotenv'
dotenv.config()
const faunadb = require('faunadb')
const q = faunadb.query
const web3 = new Web3(Web3.givenProvider);
const contractABI = require("../contract-abi.json");
const contract_address = process.env.REACT_APP_CONTRACT_ADDRESS

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "Awesome let's buy block banana card. 2 pieces max in one address.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else { 
    return {
      address: "",
      status: (
        <span>
          <p>
            {" 🦊 You must install "} 
            <a target="_blank" href={`https://metamask.io/download.html`} rel="noopener noreferrer" style={{textDecoration: 'underline'}}>
              Metamask
            </a>
            {"."}
            <br />
            {"A virtual Ethereum wallet in your browser."}
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "Awesome let's buy block banana card. 2 pieces max in one address.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Please Connect to Metamask with the button first.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" 🦊 You must install "} 
            <a target="_blank" href={`https://metamask.io/download.html`} rel="noopener noreferrer" style={{textDecoration: 'underline'}}>
              Metamask
            </a>
            {"."}
            <br />
            {"A virtual Ethereum wallet in your browser."}
          </p>
        </span>
      ),
    };
  }
};

export const whitelistNFT = async (amount, chain) => {

  const client = new faunadb.Client({secret: process.env.REACT_APP_FAUNADB}) 
  
  var signature = await client.query(q.Map(q.Paginate(q.Match(q.Index("Whitelist-Address"), window.ethereum.selectedAddress)),
        q.Lambda("signature", q.Get(q.Var("signature")))))
        .then((response) => {
          return {
            statusCode: 200,
            body: response.data[0].data
          }
        }).catch((error) => {
          return {
            statusCode: 400,
            body: JSON.stringify(error)
          }
        })

  function chainMap(chainID){
    if(chainID === "0x1") {
      return {
        name: "Mainnet",
        url: "https://etherscan.io/"
      }
    } else if(chainID === "0x3"){
      return {
        name: "Ropsten Test Network",
        url: "https://ropsten.etherscan.io/"
      }
    } else if(chainID === "0x4"){
      return {
        name: "Rinkeby Test Network",
        url: "https://rinkeby.etherscan.io/"
      }
    } else if(chainID === "0x5"){
      return {
        name: "Goerli Test Network",
        url: "https://goerli.etherscan.io/"
      }
    } else if(chainID === "0x2a"){
      return {
        name: "Kovan Test Network",
        url: "https://kovan.etherscan.io/"
      }
    }
  }

  if (chain !== process.env.REACT_APP_CHAIN_ID) {
    const result = chainMap(process.env.REACT_APP_CHAIN_ID);
    return {
      success: false,
      status: "Something went wrong: You should be using " + result.name,
    };
  }

  if (signature.body !== "{}") {  
    if(parseInt(amount) > signature.body.maxNum) {
      return {
        success: false,
        status: "You can only mint " + signature.body.maxNum + " NFT.",
      };
    }

    const NFTContract = new web3.eth.Contract(contractABI, contract_address);

    const hasMint = await NFTContract.methods.hasMint(window.ethereum.selectedAddress).call();

    if (parseInt(hasMint) + parseInt(amount) <= parseInt(signature.body.maxNum)) {

      const transactionParameters = {
        to: contract_address, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        value: ethers.utils.hexlify(ethers.utils.parseEther((parseInt(amount)*0.2).toString())).slice(2).replace(/^0+/, ''),//ethers.utils.hexlify(ethers.utils.parseEther((parseInt(amount)*0.05).toString())), // Only required to send ether to the recipient from the initiating external account.
        data: NFTContract.methods
          .mintNFT(parseInt(amount), parseInt(signature.body.maxNum), signature.body.signature)
          .encodeABI(),
        chainId: process.env.REACT_APP_CHAIN_ID,
      };
      try {
        const txHash = await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [transactionParameters],
        });
        const result = chainMap(chain);
        return {
          success: true,
          //status: "✅ Check out your transaction on Etherscan: https://etherscan.io/tx/" + txHash + "\nYou can check it out on https://opensea.io/ after a while!" ,
          status: (
            <span>
              <p>
                {"Check your transaction on "}
                <a target="_blank" href={result.url + 'tx/' + txHash} rel="noopener noreferrer" style={{textDecoration: 'underline'}}>
                  Etherscan
                </a>
                {/* <br />
                {"You can check it out on "}
                <a target="_blank" href={"https://opensea.io/account"} rel="noopener noreferrer" style={{textDecoration: 'underline'}}>
                  Opensea
                </a>
                {" after a while!"} */}
              </p>
            </span>
          )
        };
      } catch (error) {
        return {
          success: false,
          status: "Something went wrong: " + error.message,
        };
      }
    }else {
      return {
        success: false,
        status: "Exceeds the maximum vloume of NFT that you can mint.",
      };
    }
  }else {
    return {
      success: false,
      status: "You are not in whitelist.",
    };
  }
};



export const publicSaleNFT = async (amount, chain) => {

  function chainMap(chainID){
    if(chainID === "0x1") {
      return {
        name: "Mainnet",
        url: "https://etherscan.io/"
      }
    } else if(chainID === "0x3"){
      return {
        name: "Ropsten Test Network",
        url: "https://ropsten.etherscan.io/"
      }
    } else if(chainID === "0x4"){
      return {
        name: "Rinkeby Test Network",
        url: "https://rinkeby.etherscan.io/"
      }
    } else if(chainID === "0x5"){
      return {
        name: "Goerli Test Network",
        url: "https://goerli.etherscan.io/"
      }
    } else if(chainID === "0x2a"){
      return {
        name: "Kovan Test Network",
        url: "https://kovan.etherscan.io/"
      }
    }
  }

  if (chain !== process.env.REACT_APP_CHAIN_ID) {
    const result = chainMap(process.env.REACT_APP_CHAIN_ID);
    return {
      success: false,
      status: "Something went wrong: You should be using " + result.name,
    };
  }
  const NFTContract = new web3.eth.Contract(contractABI, contract_address);
  const hasMint = await NFTContract.methods.hasMint(window.ethereum.selectedAddress).call();

  if (parseInt(hasMint) + parseInt(amount) <= 2) {
    const transactionParameters = {
      to: contract_address, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      value: ethers.utils.hexlify(ethers.utils.parseEther((parseInt(amount)*0.2).toString())).slice(2).replace(/^0+/, ''),//ethers.utils.hexlify(ethers.utils.parseEther((parseInt(amount)*0.05).toString())), // Only required to send ether to the recipient from the initiating external account.
      data: NFTContract.methods
        .mintNFT(parseInt(amount), 2, "0xb5d08f646a6ce32bb8e037d7fe6fd0ff9f93b84691a31c3cad12c5e547a5e3e76342b43918cf5078c51f2bca49242b357f690e0b5c14f46158a01dae094289d31b")
        .encodeABI(),
      chainId: process.env.REACT_APP_CHAIN_ID_TEST,
    };
    try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      const result = chainMap(chain);
      return {
        success: true,
        status: (
          <span>
            <p>
              {"Check your transaction on "}
              <a target="_blank" href={result.url + 'tx/' + txHash} rel="noopener noreferrer" style={{textDecoration: 'underline'}}>
                Etherscan
              </a>
              {/* <br />
              {"You can check it out on "}
              <a target="_blank" href={"https://opensea.io/account"} rel="noopener noreferrer" style={{textDecoration: 'underline'}}>
                Opensea
              </a>
              {" after a while!"} */}
            </p>
          </span>
        )
      };
    } catch (error) {
      return {
        success: false,
        status: "Something went wrong: " + error.message,
      };
    }
  }else {
    return {
      success: false,
      status: "Exceeds the maximum vloume of NFT that you can mint.",
    };
  }
}