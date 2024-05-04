/*
  Warnings:

  - You are about to drop the column `userId` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userCells` to the `cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cart" DROP CONSTRAINT "cart_userId_fkey";

-- AlterTable
ALTER TABLE "cart" DROP COLUMN "userId",
ADD COLUMN     "userCells" BIGINT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;

-- DropTable
DROP TABLE "users";
