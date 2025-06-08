/*
  Warnings:

  - You are about to drop the column `gitlab_Id` on the `Suggestion` table. All the data in the column will be lost.
  - Added the required column `gitlab_id` to the `Suggestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Suggestion" DROP COLUMN "gitlab_Id",
ADD COLUMN     "gitlab_id" INTEGER NOT NULL;
