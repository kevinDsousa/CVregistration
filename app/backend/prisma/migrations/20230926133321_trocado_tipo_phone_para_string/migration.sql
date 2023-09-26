/*
  Warnings:

  - You are about to alter the column `phone` on the `users` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `VarChar(11)`.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "phone" SET DATA TYPE VARCHAR(11);
