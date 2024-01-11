/*
  Warnings:

  - Added the required column `imgPath` to the `Group` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "imgPath" VARCHAR(1000) NOT NULL;
