-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_estudioId_fkey";

-- AlterTable
ALTER TABLE "Comentario" ADD COLUMN     "temaId" INTEGER,
ALTER COLUMN "estudioId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_estudioId_fkey" FOREIGN KEY ("estudioId") REFERENCES "Estudio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_temaId_fkey" FOREIGN KEY ("temaId") REFERENCES "Tema"("id") ON DELETE SET NULL ON UPDATE CASCADE;
