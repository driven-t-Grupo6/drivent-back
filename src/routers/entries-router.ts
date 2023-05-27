import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getEntryByActivityId } from '@/controllers/entries-controller';

const entriesRouter = Router();

entriesRouter.all('/*', authenticateToken);
entriesRouter.get('/activity/:activityId', getEntryByActivityId);

export { entriesRouter };
