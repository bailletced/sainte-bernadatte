import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type TGraphQLContext = {
  prisma: PrismaClient;
};

export async function contextFactory(): Promise<TGraphQLContext> {
  return {
    prisma,
  };
}
