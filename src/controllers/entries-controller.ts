import { NextFunction, Response } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import entryService from '@/services/entries-service';

export async function getEntryByActivityId(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const activityId = Number(req.params.activityId);
  try {
    const entries = await entryService.getEntryByActivityId(activityId);

    res.send({ entries });
  } catch (error) {
    next();
  }
}
