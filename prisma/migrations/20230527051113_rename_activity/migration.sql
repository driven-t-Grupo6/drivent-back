/*
  Warnings:

  - You are about to drop the column `description` on the `Activity` table. All the data in the column will be lost.
  - Added the required column `local` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Activity" RENAME COLUMN "description" TO "local" ;