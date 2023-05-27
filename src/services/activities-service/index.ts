import activityRepository from '@/repositories/activities-repository';
import { dateFormat } from '@/utils/date-formate';

export async function getActivitiesDates() {
  const activities = await activityRepository.findActivitiesDates();
  const formatedActivitiesDates = dateFormat(activities);
  return formatedActivitiesDates;
}

export async function getTimeByDate(day: Date, userId: number) {
  const time = await activityRepository.getTimeByDate(day, userId);
  console.log(time);
  return time;
}

const activityService = {
  getActivitiesDates,
  getTimeByDate,
};

export default activityService;
