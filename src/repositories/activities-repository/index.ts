import { prisma } from '@/config';

async function findActivitiesDates() {
  const activities = await prisma.activity.groupBy({
    by: ['day'],
    orderBy: {
      day: 'asc',
    },
  });

  return activities;
}

async function getById(id: number) {
  const activities = await prisma.activity.findFirst({
    where: { id },
  });

  return activities;
}

async function getTimeByDate(day: Date, userId: number) {
  const time = await prisma.activity.findMany({
    where: {
      day,
    },
    include: {
      Entry: {
        where: {
          userId,
        },
      },
    },
    orderBy: {
      startsAt: 'asc',
    },
  });

  return time;
}

const activityRepository = {
  findActivitiesDates,
  getById,
  getTimeByDate,
};

export default activityRepository;
