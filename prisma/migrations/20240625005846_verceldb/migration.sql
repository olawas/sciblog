/*
  Warnings:

  - You are about to drop the column `datasetId` on the `Estudio` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Estudio" DROP CONSTRAINT "Estudio_datasetId_fkey";

-- AlterTable
ALTER TABLE "Estudio" DROP COLUMN "datasetId";
