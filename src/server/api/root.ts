// import { exampleRouter } from "~/server/api/routers/example";
import {userRouter} from "~/server/api/routers/user"
import { careerRouter } from "~/server/api/routers/career";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  // example: exampleRouter,
  user:userRouter,
  career:careerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
