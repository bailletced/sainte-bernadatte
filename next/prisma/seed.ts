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
      { isWeekly: false, title: "Messe", date: "09h00" },
      {
        isWeekly: false,
        title: "Messe des familles",
        date: "10h30",
        content:
          "avec accueil, proposition et espace dédiés aux enfants, temps convivial à l’issue de la cérémonie.",
      },
      {
        isWeekly: false,
        title: "Messe des étudiants",
        date: "18h30",
        content:
          "avec accueil, animation et des propositions spécifiques par et pour les étudiants.",
      },
      { isWeekly: true, title: "Lundi, Mardi, Mercredi", date: "18h30" },
      {
        isWeekly: true,
        title: "Jeudi, Vendredi",
        date: "09h00",
      },
      {
        isWeekly: true,
        title: "Samedi",
        date: "11h30",
      },
    ],
  });
}

async function createGroups() {
  await prisma.group.createMany({
    data: [
      {
        name: "Jeunes Pros",
        description: "Groupe des jeunes pros",
        imgPath: "/images/jeunes_pro.jpg",
      },
      {
        name: "Etudiants",
        description: "Groupe des étudiants",
        imgPath: "/images/student.jpg",
      },
      {
        name: "Parcours Alpha",
        description: "Parcours Alpha",
        imgPath: "/images/Alpha-gp-.jpeg",
      },
      {
        name: "Du Livre à la Parole",
        description: "Lire la Bible quotidiennement ",
        imgPath: "/images/Livre-à-la-parole-2.jpg",
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

createMasses()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

createGroups()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
