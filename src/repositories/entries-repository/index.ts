import { prisma } from '@/config';

async function getEntryByActivityId(activityId: number) {
  return await prisma.entry.count({
    where: {
      activityId,
    },
  });
}

async function getEntryById(userId: number, id: number) {
  return await prisma.entry.findFirst({
    where: {
      id,
      userId,
    },
  });
}

async function getEntryByActivityAndUserId(userId: number, activityId: number) {
  return await prisma.entry.findFirst({
    where: {
      userId,
      activityId,
    },
  });
}

async function getEntryByUserId(userId: number) {
  return await prisma.entry.findMany({
    where: {
      userId,
    },
    include: {
      Activity: true,
    },
  });
}

type CreateEntryParams = {
  userId: number;
  activityId: number;
  updatedAt: string;
};

async function createEntry(createEntryData: CreateEntryParams) {
  return await prisma.entry.create({
    data: createEntryData,
  });
}

async function deleteEntry(id: number) {
  return await prisma.entry.delete({
    where: {
      id,
    },
  });
}

const entryRepository = {
  getEntryByActivityId,
  getEntryById,
  getEntryByActivityAndUserId,
  getEntryByUserId,
  createEntry,
  deleteEntry,
};

export default entryRepository;
