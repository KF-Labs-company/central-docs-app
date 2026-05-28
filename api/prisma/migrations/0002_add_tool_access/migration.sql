CREATE TYPE "AccessStatus" AS ENUM ('SUCCESS', 'ERROR', 'TIMEOUT');

CREATE TABLE "tools" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "tools_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "tool_accesses" (
    "id" SERIAL NOT NULL,
    "toolId" INTEGER NOT NULL,
    "userId" TEXT,
    "ipAddress" TEXT,
    "status" "AccessStatus" NOT NULL DEFAULT 'SUCCESS',
    "errorMsg" TEXT,
    "durationMs" INTEGER,
    "accessedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "tool_accesses_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "tools_slug_key" ON "tools"("slug");
CREATE INDEX "tool_accesses_toolId_idx" ON "tool_accesses"("toolId");
CREATE INDEX "tool_accesses_userId_idx" ON "tool_accesses"("userId");
CREATE INDEX "tool_accesses_accessedAt_idx" ON "tool_accesses"("accessedAt");

ALTER TABLE "tool_accesses" ADD CONSTRAINT "tool_accesses_toolId_fkey"
    FOREIGN KEY ("toolId") REFERENCES "tools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "tool_accesses" ADD CONSTRAINT "tool_accesses_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

    ALTER TABLE "tool_accesses" ADD COLUMN "user_snapshot" JSONB;