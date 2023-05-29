import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getEntryByUserId, getEntryByActivityId, createEntry, deleteEntry } from '@/controllers/entries-controller';

const entriesRouter = Router();

entriesRouter
  .all('/*', authenticateToken)
  .get('/user', getEntryByUserId)
  .get('/activity/:activityId', getEntryByActivityId)
  .post('/activity/:activityId', createEntry)
  .delete('/activity/:id', deleteEntry);

export { entriesRouter };
