import httpStatus from 'http-status';
import { NextFunction, Response } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import entryService from '@/services/entries-service';

export async function getEntryByActivityId(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const activityId = Number(req.params.activityId);
  try {
    const entries = await entryService.getEntryByActivityId(activityId);

    res.send({ entries });
  } catch (error) {
    next(error);
  }
}

export async function getEntryByUserId(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const userId = req.userId;
  try {
    const entries = await entryService.getEntryByUserId(userId);

    res.send({ entries });
  } catch (error) {
    next(error);
  }
}

export async function createEntry(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const userId = req.userId;
  const activityId = Number(req.params.activityId);
  try {
    const entry = await entryService.createEntry(userId, activityId);

    res.status(httpStatus.CREATED).send(entry);
  } catch (error) {
    next(error);
  }
}

export async function deleteEntry(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const userId = req.userId;
  const id = Number(req.params.id);
  try {
    await entryService.deleteEntry(userId, id);

    res.sendStatus(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}
