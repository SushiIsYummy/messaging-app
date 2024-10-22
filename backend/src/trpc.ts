import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const procedure = t.procedure;

export const appRouter = t.router({
  hello: t.procedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello, ${input.name}!`,
      };
    }),

  goodbye: t.procedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input }) => {
      return {
        farewell: `Goodbye, ${input.name}!`,
      };
    }),
});

export type AppRouter = typeof appRouter;
