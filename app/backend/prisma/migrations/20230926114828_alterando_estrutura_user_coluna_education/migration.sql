/*
  Warnings:

  - Made the column `education` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "education" SET NOT NULL,
ALTER COLUMN "education" SET DATA TYPE TEXT;
