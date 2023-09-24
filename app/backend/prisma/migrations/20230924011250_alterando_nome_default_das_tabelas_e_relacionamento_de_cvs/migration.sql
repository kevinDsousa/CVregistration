/*
  Warnings:

  - You are about to drop the `cvs` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idskill` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cvs" DROP CONSTRAINT "cvs_idSkill_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_idcv_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "idskill" INTEGER NOT NULL;

-- DropTable
DROP TABLE "cvs";

-- CreateTable
CREATE TABLE "curriculum" (
    "id" SERIAL NOT NULL,
    "vacancy" TEXT NOT NULL,
    "company" TEXT NOT NULL,

    CONSTRAINT "curriculum_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_idcv_fkey" FOREIGN KEY ("idcv") REFERENCES "curriculum"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_idskill_fkey" FOREIGN KEY ("idskill") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
