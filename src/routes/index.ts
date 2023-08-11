import { Router } from 'express';
import homeRouter from './home';
import nftVerification from './nftVerification'

const router = Router();

router.use('/', homeRouter);
router.use('/verify-nft', nftVerification);

// Add other routers as the project grows
// router.use('/another-route', anotherRouter);

export default router;
