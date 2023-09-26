/*
  Warnings:

  - You are about to drop the column `company` on the `curriculum` table. All the data in the column will be lost.
  - You are about to drop the column `idcv` on the `users` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(60)`.
  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(60)`.
  - A unique constraint covering the columns `[password]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `iduser` to the `curriculum` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_idcv_fkey";

-- AlterTable
ALTER TABLE "curriculum" DROP COLUMN "company",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "iduser" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "skills" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "idcv",
ADD COLUMN     "admin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "cpf" VARCHAR(14) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "education" VARCHAR(40),
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phone" INTEGER NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(60),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(60),
ALTER COLUMN "birday" SET DATA TYPE DATE;

-- CreateIndex
CREATE UNIQUE INDEX "users_password_key" ON "users"("password");

-- AddForeignKey
ALTER TABLE "curriculum" ADD CONSTRAINT "curriculum_iduser_fkey" FOREIGN KEY ("iduser") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
