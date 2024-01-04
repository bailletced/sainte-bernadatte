-- CreateTable
CREATE TABLE "Mass" (
    "mass_id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "date" VARCHAR(255) NOT NULL,
    "content" VARCHAR(1000) NOT NULL,

    CONSTRAINT "Mass_pkey" PRIMARY KEY ("mass_id")
);
