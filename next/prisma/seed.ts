import "reflect-metadata";

import { EWeekday } from "@/src/graphql/enums/WeekdayEnum";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createTags() {
  await prisma.tag.createMany({
    data: [
      {
        name: "Chorale",
      },
      {
        name: "Service",
      },
      {
        name: "Jeunes pros",
      },
      {
        name: "Étudiants",
      },
    ],
  });
}

async function createMasses() {
  await prisma.mass.createMany({
    data: [
      {
        weekDay: EWeekday.LUNDI,
        hour: "18:30",
      },
      {
        weekDay: EWeekday.MARDI,
        hour: "18:30",
      },
      {
        weekDay: EWeekday.MERCREDI,
        hour: "18:30",
      },
      {
        weekDay: EWeekday.JEUDI,
        hour: "09:00",
      },
      {
        weekDay: EWeekday.VENDREDI,
        hour: "09:00",
      },
      {
        weekDay: EWeekday.SAMEDI,
        hour: "11:30",
      },
      {
        weekDay: EWeekday.DIMANCHE,
        hour: "09:00",
      },
      {
        weekDay: EWeekday.DIMANCHE,
        hour: "10:30",
      },
      {
        weekDay: EWeekday.DIMANCHE,
        hour: "18:30",
      },
    ],
  });
}

async function createGroups() {
  await prisma.group.createMany({
    data: [
      {
        description: "Description du groupe parcours Alpha....",
        name: "Alpha",
      },
      {
        name: "Adoration",
        description: "Description du groupe adoration....",
      },
      {
        name: "Association Parguel",
        description: "Description de l'association Parguel....",
      },
    ],
  });
}

async function bootstrap() {
  try {
    await createTags();
    await createGroups();
    await createMasses();
    await prisma.$disconnect();
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
}

bootstrap();
