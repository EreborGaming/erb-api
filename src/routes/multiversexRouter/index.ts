import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/addressHasNft/:walletAddress/:nftIdentifier', async (req, res) => {
  const { walletAddress, nftIdentifier } = req.params;

  const apiEndpoint = `https://api.multiversx.com/accounts/${walletAddress}/nfts/${nftIdentifier}`;

  try {
    await axios.get(apiEndpoint);

    return res.json({ hasNft: true });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch NFTs for the given wallet address.' });
  }
});

router.get('/getCoinsAmount/:walletAddress', async (req, res) => {
  const { walletAddress } = req.params;

  const apiEndpoint = `https://api.multiversx.com/accounts/${walletAddress}/tokens/ERB-bf9494?fields=balance`;

  try {
    const result = await axios.get(apiEndpoint);

    return res.json({ ereborAmount:  Math.round(result.data.balance / 1000000000000000000 )});
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch erebor coins balance for the given wallet address.' });
  }
});

export default router;
