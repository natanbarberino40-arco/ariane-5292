import { z } from "zod";
import { base } from "../__core/app";
import { db } from "../database";
import * as schema from "../database/schema";

export const agendamentos = {
  criar: base
    .input(
      z.object({
        nome: z.string().min(2).max(120),
        email: z.string().email(),
        telefone: z.string().max(40).optional(),
        modalidade: z.enum(["online", "presencial", "indiferente"]),
        mensagem: z.string().max(2000).optional(),
      }),
    )
    .handler(async ({ input }) => {
      const [row] = await db
        .insert(schema.agendamentos)
        .values(input)
        .returning({ id: schema.agendamentos.id });
      return { ok: true, id: row.id };
    }),
};
