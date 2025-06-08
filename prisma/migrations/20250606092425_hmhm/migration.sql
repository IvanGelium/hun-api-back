-- DropForeignKey
ALTER TABLE "Suggestion" DROP CONSTRAINT "Suggestion_author_id_fkey";

-- AlterTable
ALTER TABLE "Suggestion" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "source" DROP NOT NULL,
ALTER COLUMN "author_id" DROP NOT NULL,
ALTER COLUMN "author_name" DROP NOT NULL,
ALTER COLUMN "gitlab_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Suggestion" ADD CONSTRAINT "Suggestion_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
