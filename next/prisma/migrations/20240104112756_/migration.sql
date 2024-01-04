/*
  Warnings:

  - Added the required column `isWeekly` to the `Mass` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mass" ADD COLUMN     "isWeekly" BOOLEAN NOT NULL,
ALTER COLUMN "content" DROP NOT NULL;
