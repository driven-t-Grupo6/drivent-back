import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getActivitiesDates, getTimeByDate } from '@/controllers/activities-controller';

const activitiesRouter = Router();

activitiesRouter.all('/*', authenticateToken);
activitiesRouter.get('/dates', getActivitiesDates);
activitiesRouter.get('/:date/time', getTimeByDate);

export { activitiesRouter };
