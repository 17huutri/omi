import React, { useState, useEffect } from "react";
import axios from "axios";

const WalletTransaction = () => {
  const [walletData, setWalletData] = useState({});
  const [amountToAdd, setAmountToAdd] = useState(0);

  const fetchWalletData = async () => {
    try {
      const response = await axios.get(
        "https://onlinemarket-api.nguyenminhhai.us/api/v1/customer?page_number=1&page_size=2"
      );
      setWalletData(response.data);
    } catch (error) {
      console.error("Error fetching wallet data:", error);
    }
  };

  const addMoneyToWallet = async () => {
    try {
      const response = await axios.put(
        "https://onlinemarket-api.nguyenminhhai.us/api/v1/deposit/wallet/11",
        { amount: amountToAdd }
      );


      const zaloPayUrl = response.data.url;

      window.location.href = zaloPayUrl;
    } catch (error) {
      console.error("Error adding money to wallet:", error);
    }
  };

  useEffect(() => {
    fetchWalletData();
  }, []);

  return (

    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Số dư Ví: {walletData.Balance}</h2>
      <input
        type="number"
        value={amountToAdd}
        onChange={(e) => setAmountToAdd(e.target.value)}
        className="w-full py-2 px-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter amount to add"
      />
      <button
        onClick={addMoneyToWallet}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
      >
        Nạp tiền vào ví
      </button>
    </div>
  );
};

export default WalletTransaction;
