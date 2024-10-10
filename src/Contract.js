import Web3 from "web3";
import PhotoTransferArtifact from "./artifacts/PhotoTransfer.json"; // Import the manual ABI file

const CONTRACT_ADDRESS = "0xBcD8136A6De08E25Fdf7CeE9c6D74CD3D38B51d6"; // Replace with your actual deployed contract address

// Function to get Web3 instance and provider
export const getProvider = () => {
    if (window.ethereum) {
        return new Web3(window.ethereum);
    } else {
        console.error("Please install MetaMask!");
        return null;
    }
};

// Function to get the contract instance
export const getContract = async () => {
    const web3 = getProvider();
    const accounts = await web3.eth.getAccounts(); // Request accounts from MetaMask
    const contract = new web3.eth.Contract(PhotoTransferArtifact.abi, CONTRACT_ADDRESS, {
        from: accounts[0], // default account to send transactions from
    });
    return contract;
};

// Function to send a photo
export const sendPhoto = async (recipient, ipfsHash, isEncrypted) => {
    try {
        const contract = await getContract();
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const sender = accounts[0];

        // Send the transaction to the smart contract
        await contract.methods.sendPhoto(recipient, ipfsHash, isEncrypted).send({
            from: sender,
        });
        console.log("Photo sent successfully");
    } catch (error) {
        console.error("Error sending photo:", error);
    }
};

// Function to retrieve a photo by its ID
export const getPhoto = async (photoId) => {
    try {
        const contract = await getContract();
        const ipfsHash = await contract.methods.getPhoto(photoId).call();
        
        return ipfsHash;
    } catch (error) {
        console.error("Error retrieving photo:", error);
        return null;
    }
};
