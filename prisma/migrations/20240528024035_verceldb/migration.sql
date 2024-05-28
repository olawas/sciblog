/*
  Warnings:

  - Added the required column `organizacion` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Estudio" ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "organizacion" TEXT NOT NULL;
