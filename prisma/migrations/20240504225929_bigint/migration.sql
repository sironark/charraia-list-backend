/*
  Warnings:

  - You are about to alter the column `userCells` on the `cart` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "cart" ALTER COLUMN "userCells" SET DATA TYPE INTEGER;
