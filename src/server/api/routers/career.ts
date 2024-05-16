// import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
//   protectedProcedure,
} from "~/server/api/trpc";

export const careerRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.career.findMany();
  }),
});
