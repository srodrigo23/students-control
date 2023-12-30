/*
  Warnings:

  - Added the required column `codCareer` to the `Career` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Career" ADD COLUMN     "codCareer" TEXT NOT NULL;
