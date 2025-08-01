/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Copy` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Copy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Copy" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Copy_name_key" ON "Copy"("name");
