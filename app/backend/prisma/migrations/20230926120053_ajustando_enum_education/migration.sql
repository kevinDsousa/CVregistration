/*
  Warnings:

  - Changed the type of `education` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Education" AS ENUM ('FUNDAMENTAL_COMPLETO', 'MEDIO_INCOMPLETO', 'MEDIO_COMPLETO', 'SUPERIOR_INCOMPLETO', 'SUPERIOR_COMPLETO', 'MESTRADO', 'DOUTORADO');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "education",
ADD COLUMN     "education" "Education" NOT NULL;
