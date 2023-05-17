import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getHotels, getHotelsWithRooms, getHotelsByRoomId } from '@/controllers/hotel-controller';

const hotelsRouter = Router();

hotelsRouter
  .all('/*', authenticateToken)
  .get('/', getHotels)
  .get('/:hotelId', getHotelsWithRooms)
  .get('/room/:roomId', getHotelsByRoomId);

export { hotelsRouter };
