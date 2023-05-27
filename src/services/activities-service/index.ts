import activityRepository from '@/repositories/activities-repository';
import { dateFormat } from '@/utils/date-formate';

export async function getActivitiesDates() {
  const activities = await activityRepository.findActivitiesDates();
  const formatedActivitiesDates = dateFormat(activities);
  return formatedActivitiesDates;
}

export async function getTimeByDate(day: Date, userId: number) {
  return await activityRepository.getTimeByDate(day, userId);
}

const activityService = {
  getActivitiesDates,
  getTimeByDate,
};

export default activityService;
