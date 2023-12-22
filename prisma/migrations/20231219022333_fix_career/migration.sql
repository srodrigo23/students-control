/*
  Warnings:

  - You are about to drop the column `codCarrer` on the `Career` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studentId]` on the table `Career` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `studentId` to the `Career` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Career" DROP CONSTRAINT "Career_codCarrer_fkey";

-- DropIndex
DROP INDEX "Career_codCarrer_key";

-- AlterTable
ALTER TABLE "Career" DROP COLUMN "codCarrer",
ADD COLUMN     "studentId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Career_studentId_key" ON "Career"("studentId");

-- AddForeignKey
ALTER TABLE "Career" ADD CONSTRAINT "Career_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
