/*
  Warnings:

  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "withoutDiscount" REAL,
    "discountPercentage" REAL,
    "rating" REAL,
    "inStock" BOOLEAN NOT NULL DEFAULT true,
    "isNew" BOOLEAN NOT NULL DEFAULT false,
    "condition" TEXT NOT NULL DEFAULT 'NEW',
    "categorys" JSONB,
    "specifications" JSONB,
    "mainFeatures" JSONB,
    "colors" JSONB,
    "includes" JSONB,
    "freeShipping" TEXT NOT NULL DEFAULT 'FREE',
    "warranty" TEXT NOT NULL DEFAULT 'MANUFACTURER',
    "returnPolicy" TEXT NOT NULL DEFAULT 'DAYS_30',
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Product" ("createdAt", "description", "id", "price", "title", "updatedAt", "userId") SELECT "createdAt", "description", "id", "price", "title", "updatedAt", "userId" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
