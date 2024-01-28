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
    await prisma.$disconnect();
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
}

bootstrap();
