import { useMutation } from "@tanstack/react-query";
import { orpc } from "../lib/api";

export function useCriarAgendamento() {
  return useMutation(orpc.agendamentos.criar.mutationOptions());
}
