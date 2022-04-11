/*
  Warnings:

  - Added the required column `userId` to the `Friend` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Friend" ADD COLUMN     "userId" UUID NOT NULL;
