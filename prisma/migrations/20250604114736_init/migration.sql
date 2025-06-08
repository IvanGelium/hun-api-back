/*
  Warnings:

  - You are about to drop the column `published` on the `Suggestion` table. All the data in the column will be lost.
  - The `status` column on the `Suggestion` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Suggestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gitlab_id` to the `Suggestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `Suggestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `middle_name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "suggestion_status" AS ENUM ('RECIVED', 'HANDELED', 'ACCEPTED', 'REFUSED');

-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'DEVELOPER';

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Suggestion" DROP COLUMN "published",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "gitlab_id" INTEGER NOT NULL,
ADD COLUMN     "source" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "suggestion_status" NOT NULL DEFAULT 'RECIVED';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "UpdatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "middle_name" TEXT NOT NULL;

-- DropTable
DROP TABLE "Profile";

-- DropEnum
DROP TYPE "SuggestionStatus";
