-- AlterTable
ALTER TABLE "Like" ADD COLUMN     "songurl" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "songurl" TEXT NOT NULL DEFAULT '';
