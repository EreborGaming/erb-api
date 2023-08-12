import request from 'supertest';
import app from '../../app';  // Adjust the path to your Express app instance

describe('NFT Verification Route', () => {
  it('should check if a wallet has a specific NFT', async () => {
    const walletAddress = 'erd1dkdlcttvpnk6l5s6lmj0zcxkpqkdvzjcjgdmucd9g64vzj0gy09qu42sjp';
    const nftIdentifier = 'XPACHIEVE-5a0519-01';

    const response = await request(app).get(`/multiversex/addressHasNft/${walletAddress}/${nftIdentifier}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('hasNft');
  });

  it('should check if a invalid wallet has a specific NFT', async () => {
    const walletAddress = 'invalidwallet';
    const nftIdentifier = 'XPACHIEVE-5a0519-01';

    const response = await request(app).get(`/multiversex/addressHasNft/${walletAddress}/${nftIdentifier}`);

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('message');
  });

  it('should receive the erb amount for certain wallet', async () => {
    const walletAddress = 'erd1dkdlcttvpnk6l5s6lmj0zcxkpqkdvzjcjgdmucd9g64vzj0gy09qu42sjp';

    const response = await request(app).get(`/multiversex/getCoinsAmount/${walletAddress}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('ereborAmount');
  });

  it('should fail to receive the erb amount for wrong wallet', async () => {
    const walletAddress = 'invalidwallet';

    const response = await request(app).get(`/multiversex/getCoinsAmount/${walletAddress}`);

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('message');
  });
});
