/*
  Warnings:

  - You are about to drop the column `songurl` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `songurl` on the `Song` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Like" DROP COLUMN "songurl",
ADD COLUMN     "songUrl" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "songurl",
ADD COLUMN     "songUrl" TEXT NOT NULL DEFAULT '';
