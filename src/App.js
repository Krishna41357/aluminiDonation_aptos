// import { useState } from "react";
// import { Button, Input, Card, CardContent } from " @/components/ui";
// import { Aptos, AptosClient } from "aptos";
// import { useWallet } from "@aptos-labs/wallet-adapter-react";

// const client = new AptosClient("https://fullnode.devnet.aptoslabs.com");

// export default function AlumniDonation() {
//   const { connect, account, disconnect } = useWallet();
//   const [institution, setInstitution] = useState("");
//   const [amount, setAmount] = useState("");
//   const [message, setMessage] = useState("");
//   const [adminMessage, setAdminMessage] = useState("");

//   const handleInitPool = async () => {
//     if (!account) {
//       setAdminMessage("Please connect your wallet as an institution admin.");
//       return;
//     }

//     try {
//       const payload = {
//         function: "${MODULE_ADDRESS::DonationPool::init_donation_pool",
//         type_arguments: [],
//         arguments: [],
//       };

//       await client.generateTransaction(account.address, payload);
//       setAdminMessage("Donation pool initialized successfully!");
//     } catch (error) {
//       console.error("Pool initialization failed", error);
//       setAdminMessage("Transaction failed. Please try again.");
//     }
//   };

//   const handleDonate = async () => {
//     if (!account || !institution || !amount) {
//       setMessage("Please connect wallet and enter details.");
//       return;
//     }

//     try {
//       const payload = {
//         function: "${MODULE_ADDRESS::DonationPool::donate",
//         type_arguments: [],
//         arguments: [institution, parseInt(amount)],
//       };

//       await client.generateTransaction(account.address, payload);
//       setMessage(`Successfully donated ${amount} AptosCoins to ${institution}`);
//     } catch (error) {
//       console.error("Donation failed", error);
//       setMessage("Transaction failed. Please try again.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-6">
//       <Button onClick={account ? disconnect : connect} className="mb-4">
//         {account ? "Disconnect Wallet" : "Connect Petra Wallet"}
//       </Button>
//       <Card className="w-96 p-6 shadow-lg">
//         <CardContent>
//           <h2 className="text-xl font-bold mb-4">Alumni Donation</h2>
//           <Input
//             type="text"
//             placeholder="Institution Address"
//             value={institution}
//             onChange={(e) => setInstitution(e.target.value)}
//             className="mb-2"
//           />
//           <Input
//             type="number"
//             placeholder="Amount (AptosCoins)"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             className="mb-2"
//           />
//           <Button onClick={handleDonate} className="w-full">
//             Donate
//           </Button>
//           {message && <p className="mt-2 text-center text-sm text-gray-700">{message}</p>}
//         </CardContent>
//       </Card>

//       <Card className="w-96 p-6 shadow-lg">
//         <CardContent>
//           <h2 className="text-xl font-bold mb-4">Institution Setup</h2>
//           <Button onClick={handleInitPool} className="w-full">
//             Initialize Donation Pool
//           </Button>
//           {adminMessage && <p className="mt-2 text-center text-sm text-gray-700">{adminMessage}</p>}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
// import { useState } from "react";
// import { Aptos, AptosClient } from "aptos";
// import { useWallet } from "@aptos-labs/wallet-adapter-react";

// const client = new AptosClient("https://fullnode.devnet.aptoslabs.com");


// export default function AlumniDonation() {
//   const { connect, account, disconnect } = useWallet();
//   const [institution, setInstitution] = useState("");
//   const [amount, setAmount] = useState("");
//   const [message, setMessage] = useState("");
//   const [adminMessage, setAdminMessage] = useState("");
//   const MODULE_ADDRESS ="0x77dcd25d1dad82ed47f3dc3105776cbb81a7b65b3b2d75fa5c8b48a380fd0af6"
//   const handleInitPool = async () => {
//     if (!account) {
//       setAdminMessage("Please connect your wallet as an institution admin.");
//       return;
//     }

//     try {
//       const payload = {
//         function: `${MODULE_ADDRESS}::DonationPool::init_donation_pool`,
//         type_arguments: [],
//         arguments: [],
//       };

//       await client.generateTransaction(account.address, payload);
//       setAdminMessage("Donation pool initialized successfully!");
//     } catch (error) {
//       console.error("Pool initialization failed", error);
//       setAdminMessage("Transaction failed. Please try again.");
//     }
//   };

//   const handleDonate = async () => {
//     if (!account || !institution || !amount) {
//       setMessage("Please connect wallet and enter details.");
//       return;
//     }

//     try {
//       const payload = {
//         function: `${MODULE_ADDRESS}::DonationPool::donate`,
//         type_arguments: [],
//         arguments: [institution, parseInt(amount)],
//       };

//       await client.generateTransaction(account.address, payload);
//       setMessage(`Successfully donated ${amount} AptosCoins to ${institution}`);
//     } catch (error) {
//       console.error("Donation failed", error);
//       setMessage("Transaction failed. Please try again.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-6 p-4">
//       <button onClick={account ? disconnect : connect} className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
//         {account ? "Disconnect Wallet" : "Connect Petra Wallet"}
//       </button>
      
//       <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-xl font-bold mb-4">Alumni Donation</h2>
//         <input
//           type="text"
//           placeholder="Institution Address"
//           value={institution}
//           onChange={(e) => setInstitution(e.target.value)}
//           className="w-full p-2 border rounded-md mb-2"
//         />
//         <input
//           type="number"
//           placeholder="Amount (AptosCoins)"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           className="w-full p-2 border rounded-md mb-2"
//         />
//         <button onClick={handleDonate} className="w-full px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700">
//           Donate
//         </button>
//         {message && <p className="mt-2 text-center text-sm text-gray-700">{message}</p>}
//       </div>

//       <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-xl font-bold mb-4">Institution Setup</h2>
//         <button onClick={handleInitPool} className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700">
//           Initialize Donation Pool
//         </button>
//         {adminMessage && <p className="mt-2 text-center text-sm text-gray-700">{adminMessage}</p>}
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { AptosClient, AptosAccount, FaucetClient, Types } from 'aptos';

function App() {
  const [account, setAccount] = useState(null);
  const [institutionAddress, setInstitutionAddress] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);
  const [poolInitialized, setPoolInitialized] = useState(false);
  const [totalDonations, setTotalDonations] = useState(0);

  // Connect to Devnet
  const NODE_URL = 'https://fullnode.devnet.aptoslabs.com/v1';
  const FAUCET_URL = 'https://faucet.devnet.aptoslabs.com';
  const client = new AptosClient(NODE_URL);
  const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);
  
  // Module address where the contract is deployed
  const MODULE_ADDRESS = "0xc506346580e6d8b7f72d61f77af400ef015e484c22ed6ab27b1ea93d33812d01";
  const MODULE_NAME = "AlumniDonation";
  
  useEffect(() => {
    // Check if wallet is connected through browser extension
    const checkWallet = async () => {
      if (window.aptos) {
        try {
          const response = await window.aptos.connect();
          setAccount(response.address);
          checkPoolStatus(response.address);
        } catch (error) {
          console.error("Error connecting to wallet:", error);
        }
      }
    };
    
    checkWallet();
  }, []);
  
  const connectWallet = async () => {
    if (window.aptos) {
      try {
        const response = await window.aptos.connect();
        setAccount(response.address);
        checkPoolStatus(response.address);
        setFeedback('Wallet connected successfully!');
      } catch (error) {
        setFeedback('Failed to connect wallet: ' + error.message);
      }
    } else {
      setFeedback('Aptos wallet extension not found. Please install it.');
    }
  };
  
  const checkPoolStatus = async (address) => {
    try {
      const resources = await client.getAccountResources(address);
      const poolResource = resources.find(r => 
        r.type === `${MODULE_ADDRESS}::${MODULE_NAME}::DonationPool`
      );
      
      if (poolResource) {
        setPoolInitialized(true);
        setTotalDonations(poolResource.data.total_donations);
      }
    } catch (error) {
      console.error("Error checking pool status:", error);
    }
  };
  
  const initDonationPool = async () => {
    if (!account) {
      setFeedback('Please connect your wallet first');
      return;
    }
    
    setLoading(true);
    setFeedback('Initializing donation pool...');
    
    try {
      const transaction = {
        type: "entry_function_payload",
        function: `${MODULE_ADDRESS}::${MODULE_NAME}::init_donation_pool`,
        arguments: [],
        type_arguments: []
      };
      
      const pendingTxn = await window.aptos.signAndSubmitTransaction(transaction);
      await client.waitForTransaction(pendingTxn.hash);
      
      setPoolInitialized(true);
      setFeedback('Donation pool initialized successfully!');
      checkPoolStatus(account);
    } catch (error) {
      setFeedback('Failed to initialize donation pool: ' + error.message);
    } finally {
      setLoading(false);
    }
  };
  
  const makeDonation = async () => {
    if (!account) {
      setFeedback('Please connect your wallet first');
      return;
    }
    
    if (!institutionAddress) {
      setFeedback('Please enter an institution address');
      return;
    }
    
    if (!donationAmount || isNaN(parseInt(donationAmount)) || parseInt(donationAmount) <= 0) {
      setFeedback('Please enter a valid donation amount');
      return;
    }
    
    setLoading(true);
    setFeedback('Processing donation...');
    
    try {
      const amountInOctas = parseInt(donationAmount) * 100000000; // Convert APT to Octas (1 APT = 10^8 Octas)
      
      const transaction = {
        type: "entry_function_payload",
        function: `${MODULE_ADDRESS}::${MODULE_NAME}::donate`,
        arguments: [institutionAddress, amountInOctas.toString()],
        type_arguments: []
      };
      
      const pendingTxn = await window.aptos.signAndSubmitTransaction(transaction);
      await client.waitForTransaction(pendingTxn.hash);
      
      setFeedback(`Successfully donated ${donationAmount} APT to the institution!`);
      setDonationAmount('');
      if (institutionAddress === account) {
        checkPoolStatus(account);
      }
    } catch (error) {
      setFeedback('Failed to make donation: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Alumni Donation Portal</h1>
        <p>Support your alma mater with Aptos tokens</p>
      </header>
      
      <div className="wallet-section">
        {!account ? (
          <button onClick={connectWallet} disabled={loading}>
            Connect Wallet
          </button>
        ) : (
          <div className="account-info">
            <p>Connected Account: {account.substring(0, 6)}...{account.substring(account.length - 4)}</p>
          </div>
        )}
      </div>
      
      {account && (
        <div className="actions-container">
          {!poolInitialized ? (
            <div className="action-card">
              <h2>Initialize Donation Pool</h2>
              <p>Set up your institution's donation pool to start accepting contributions</p>
              <button onClick={initDonationPool} disabled={loading}>
                Initialize Pool
              </button>
            </div>
          ) : (
            <div className="action-card">
              <h2>Donation Pool Active</h2>
              <p>Total Donations: {totalDonations / 100000000} APT</p>
            </div>
          )}
          
          <div className="action-card">
            <h2>Make a Donation</h2>
            <div className="input-group">
              <label>Institution Address:</label>
              <input
                type="text"
                placeholder="Enter institution address"
                value={institutionAddress}
                onChange={(e) => setInstitutionAddress(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="input-group">
              <label>Amount (APT):</label>
              <input
                type="number"
                placeholder="Enter donation amount"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                disabled={loading}
                min="0"
                step="0.1"
              />
            </div>
            <button onClick={makeDonation} disabled={loading}>
              Donate
            </button>
          </div>
        </div>
      )}
      
      {feedback && (
        <div className={`feedback ${feedback.includes('Failed') ? 'error' : 'success'}`}>
          {feedback}
        </div>
      )}
      
      <style jsx>{`
        .app-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Arial', sans-serif;
        }
        
        header {
          text-align: center;
          margin-bottom: 30px;
        }
        
        header h1 {
          color: #4F46E5;
          margin-bottom: 10px;
        }
        
        .wallet-section {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        }
        
        button {
          background-color: #4F46E5;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s;
        }
        
        button:hover {
          background-color: #4338CA;
        }
        
        button:disabled {
          background-color: #9CA3AF;
          cursor: not-allowed;
        }
        
        .account-info {
          padding: 10px;
          background-color: #F3F4F6;
          border-radius: 5px;
        }
        
        .actions-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .action-card {
          background-color: #F3F4F6;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .action-card h2 {
          color: #4F46E5;
          margin-top: 0;
        }
        
        .input-group {
          margin-bottom: 15px;
        }
        
        .input-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }
        
        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #D1D5DB;
          border-radius: 5px;
          font-size: 16px;
        }
        
        .feedback {
          padding: 15px;
          border-radius: 5px;
          margin-top: 20px;
          text-align: center;
        }
        
        .success {
          background-color: #ECFDF5;
          color: #047857;
        }
        
        .error {
          background-color: #FEF2F2;
          color: #B91C1C;
        }
      `}</style>
    </div>
  );
}

export default App;