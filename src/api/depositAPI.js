import axios from 'axios';

const depositToWallet = async (walletId, amount) => {
  try {
    const url = `https://onlinemarket-api.nguyenminhhai.us/api/v1/deposit/wallet/${walletId}`;
    const response = await axios.put(url, { amount });
    return response.data;
  } catch (error) {
    console.error('Error depositing money:', error);
    throw error;
  }
};

export default depositToWallet;

