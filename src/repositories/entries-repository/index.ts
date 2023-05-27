import { prisma } from '@/config';

async function getEntryByActivityId(activityId: number) {
  return await prisma.entry.count({
    where: {
      activityId,
    },
  });
}

const entryRepository = {
  getEntryByActivityId,
};

export default entryRepository;
