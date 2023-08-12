import { Router } from 'express';
import homeRouter from './home';
import multiversexRouter from './multiversexRouter'

const router = Router();

router.use('/', homeRouter);
router.use('/multiversex', multiversexRouter);

// Add other routers as the project grows
// router.use('/another-route', anotherRouter);

export default router;
