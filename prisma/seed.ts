import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
const prisma = new PrismaClient();

async function main() {
  let event = await prisma.event.findFirst();
  if (!event) {
    event = await prisma.event.create({
      data: {
        title: "Driven.t",
        logoImageUrl: "https://files.driveneducation.com.br/images/logo-rounded.png",
        backgroundImageUrl: "linear-gradient(to right, #FA4098, #FFD77F)",
        startsAt: dayjs().toDate(),
        endsAt: dayjs().add(21, "days").toDate(),
      },
    });
  }

  let hotel = await prisma.hotel.findFirst();
  if (!hotel) {
    hotel = await prisma.hotel.create({
      data: {
        name: "Driven Resort",
        image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/orlandofl/5900_pool_b92df465-0c67-4161-b8bb-67f9fc301094.jpg"
      }
    })

    for(let i = 0; i < 20; i++){
      i < 10 ?
      (await prisma.room.create({ data: {name: "Simple room", capacity: 1, hotelId: 1}}))
      : i < 17 ?
      (await prisma.room.create({ data: {name: "Medium room", capacity: 2, hotelId: 1}}))
      :
      (await prisma.room.create({ data: {name: "High room", capacity: 3, hotelId: 1}}))
    }
  }

  console.log({ event, hotel });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
