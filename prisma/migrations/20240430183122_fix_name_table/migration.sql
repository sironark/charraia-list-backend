/*
  Warnings:

  - You are about to drop the column `url` on the `listitems` table. All the data in the column will be lost.
  - Added the required column `imgUrl` to the `listitems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "listitems" DROP COLUMN "url",
ADD COLUMN     "imgUrl" TEXT NOT NULL;
