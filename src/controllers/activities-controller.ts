import dayjs from 'dayjs';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import activityService from '@/services/activities-service';

export async function getActivitiesDates(_req: Request, res: Response) {
  const dates = await activityService.getActivitiesDates();
  console.log(dates);
  return res.status(httpStatus.OK).send(dates);
}

export async function getTimeByDate(req: Request, res: Response) {
  const day = req.params.date;
  console.log(`day: ${day}`);
  const { userId } = res.locals;
  console.log(`userId: ${userId}`);
  const newDate = dayjs(day).toDate();
  console.log(`newDate: ${newDate}`);
  const time = await activityService.getTimeByDate(newDate, userId);
  console.log(`time: ${time}`);

  return res.status(httpStatus.OK).send(time);
}
