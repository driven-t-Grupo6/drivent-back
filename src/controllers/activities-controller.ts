import dayjs from 'dayjs';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import activityService from '@/services/activities-service';

export async function getActivitiesDates(_req: Request, res: Response) {
  const dates = await activityService.getActivitiesDates();

  return res.status(httpStatus.OK).send(dates);
}

export async function getTimeByDate(req: Request, res: Response) {
  const day = req.params.date;
  const { userId } = res.locals;
  const newDate = dayjs(day).toDate();
  const time = await activityService.getTimeByDate(newDate, userId);

  return res.status(httpStatus.OK).send(time);
}
