/*
  Warnings:

  - You are about to drop the column `studentId` on the `Career` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[careerId]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `careerId` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Career" DROP CONSTRAINT "Career_studentId_fkey";

-- DropIndex
DROP INDEX "Career_studentId_key";

-- AlterTable
ALTER TABLE "Career" DROP COLUMN "studentId";

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "careerId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Student_careerId_key" ON "Student"("careerId");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "Career"("id") ON DELETE CASCADE ON UPDATE CASCADE;
