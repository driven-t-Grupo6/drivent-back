import entryRepository from '@/repositories/entries-repository';

export async function getEntryByActivityId(activityId: number) {
  return await entryRepository.getEntryByActivityId(activityId);
}

const entryService = {
  getEntryByActivityId,
};

export default entryService;
