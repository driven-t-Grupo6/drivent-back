/*
  Warnings:

  - You are about to alter the column `local` on the `Activity` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Activity" ALTER COLUMN "local" SET DATA TYPE VARCHAR(255);
