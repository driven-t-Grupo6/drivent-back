import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import entryRepository from '@/repositories/entries-repository';
import { conflictError, notFoundError } from '@/errors';
import activityRepository from '@/repositories/activities-repository';

dayjs.extend(isBetween);

export async function getEntryByActivityId(activityId: number) {
  if (isNaN(activityId)) throw conflictError('Id invalido!');

  return await entryRepository.getEntryByActivityId(activityId);
}

export async function getEntryByUserId(userId: number) {
  if (isNaN(userId)) throw conflictError('Id invalido!');

  return await entryRepository.getEntryByUserId(userId);
}

export async function createEntry(userId: number, activityId: number) {
  if (isNaN(userId) || isNaN(activityId)) throw conflictError('Id invalido!');

  const activity = await activityRepository.getById(activityId);
  if (!activity) throw conflictError('Essa atividade não existe!');

  const entry = await entryRepository.getEntryByActivityAndUserId(userId, activityId);
  if (entry) throw conflictError('A inscrição já foi feita!');

  const userEntries = await entryRepository.getEntryByUserId(userId);

  if (userEntries.some((e) => dayjs(e.Activity.startsAt).isSame(dayjs(activity.startsAt))))
    throw conflictError('Você já tem uma atividade nesse horário!');

  if (userEntries.some((e) => dayjs(e.Activity.startsAt).isBetween(dayjs(activity.startsAt), dayjs(activity.endsAt))))
    throw conflictError('Você já tem uma atividade nesse horário!');

  return await entryRepository.createEntry({ userId, activityId, updatedAt: dayjs().format() });
}

export async function deleteEntry(userId: number, id: number) {
  if (isNaN(id)) throw conflictError('Id invalido!');

  const entry = await entryRepository.getEntryById(userId, id);
  if (!entry) throw notFoundError();

  await entryRepository.deleteEntry(id);
}

const entryService = {
  getEntryByActivityId,
  getEntryByUserId,
  createEntry,
  deleteEntry,
};

export default entryService;
