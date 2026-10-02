import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

/**
 * Define your database schema here, then apply it with `bun run db:push`
 * (from packages/web).
 */
export const agendamentos = sqliteTable("agendamentos", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  nome: text("nome").notNull(),
  email: text("email").notNull(),
  telefone: text("telefone"),
  modalidade: text("modalidade").notNull(),
  mensagem: text("mensagem"),
  criadoEm: integer("criado_em", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});
