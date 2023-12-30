/*
  Warnings:

  - A unique constraint covering the columns `[codCareer]` on the table `Career` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_careerId_fkey";

-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "careerId" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Career_codCareer_key" ON "Career"("codCareer");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "Career"("codCareer") ON DELETE CASCADE ON UPDATE CASCADE;
