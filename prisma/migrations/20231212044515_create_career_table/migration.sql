-- CreateTable
CREATE TABLE "Career" (
    "id" SERIAL NOT NULL,
    "codCarrer" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Career_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Career_codCarrer_key" ON "Career"("codCarrer");

-- AddForeignKey
ALTER TABLE "Career" ADD CONSTRAINT "Career_codCarrer_fkey" FOREIGN KEY ("codCarrer") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
