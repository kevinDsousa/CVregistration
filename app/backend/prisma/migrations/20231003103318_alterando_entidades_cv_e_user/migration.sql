/*
  Warnings:

  - You are about to drop the column `iduser` on the `curriculum` table. All the data in the column will be lost.
  - You are about to drop the column `birday` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `cpf` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `education` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `idskill` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `curriculum` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `birthday` to the `curriculum` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `curriculum` table without a default value. This is not possible if the table is not empty.
  - Added the required column `education` to the `curriculum` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `curriculum` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idskill` to the `curriculum` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `curriculum` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `curriculum` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "curriculum" DROP CONSTRAINT "curriculum_iduser_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_idskill_fkey";

-- AlterTable
ALTER TABLE "curriculum" DROP COLUMN "iduser",
ADD COLUMN     "birthday" DATE NOT NULL,
ADD COLUMN     "cpf" VARCHAR(14) NOT NULL,
ADD COLUMN     "education" "Education" NOT NULL,
ADD COLUMN     "email" VARCHAR(60) NOT NULL,
ADD COLUMN     "idskill" INTEGER NOT NULL,
ADD COLUMN     "name" VARCHAR(60) NOT NULL,
ADD COLUMN     "phone" VARCHAR(11) NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "birday",
DROP COLUMN "cpf",
DROP COLUMN "education",
DROP COLUMN "idskill",
DROP COLUMN "phone";

-- CreateIndex
CREATE UNIQUE INDEX "curriculum_name_key" ON "curriculum"("name");

-- AddForeignKey
ALTER TABLE "curriculum" ADD CONSTRAINT "curriculum_idskill_fkey" FOREIGN KEY ("idskill") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
