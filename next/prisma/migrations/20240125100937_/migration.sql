-- CreateTable
CREATE TABLE "Informations" (
    "informations_id" TEXT NOT NULL,
    "phoneNumber" VARCHAR(50) NOT NULL,
    "mail" VARCHAR(1000) NOT NULL,

    CONSTRAINT "Informations_pkey" PRIMARY KEY ("informations_id")
);
