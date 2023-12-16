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

createTags()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
