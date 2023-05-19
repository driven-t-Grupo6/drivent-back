import { Event } from '@prisma/client';
import { prisma } from '@/config';
import { redis } from '@/config/redis';

async function findFirst(): Promise<Event> {
  const event = await redis.get('Event');

  if (event) {
    console.log('Cache');
    return JSON.parse(event);
  }

  const newEvent = await prisma.event.findFirst();
  redis.set('Event', JSON.stringify(newEvent));
  return newEvent;
}

const eventRepository = {
  findFirst,
};

export default eventRepository;
