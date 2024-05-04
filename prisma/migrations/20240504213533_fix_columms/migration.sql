/*
  Warnings:

  - You are about to drop the `listitems` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "cart" DROP CONSTRAINT "cart_itemId_fkey";

-- DropTable
DROP TABLE "listitems";

-- CreateTable
CREATE TABLE "listitens" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "listitens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "listitens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
