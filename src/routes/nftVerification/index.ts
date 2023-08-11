import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/verify-nft/:walletAddress/:nftIdentifier', async (req, res) => {
  const { walletAddress, nftIdentifier } = req.params;

  // Placeholder for the MultiversX API endpoint to fetch NFTs for a wallet
  // Adjust this based on the actual MultiversX API documentation
  const apiEndpoint = `https://api.multiversx.com/nfts/${walletAddress}`;

  try {
    const response = await axios.get(apiEndpoint);
    const nfts = response.data;

    const hasNft = nfts.some((nft: any) => nft.identifier === nftIdentifier);

    return res.json({ hasNft });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to fetch NFTs for the given wallet address.' });
  }
});

export default router;
