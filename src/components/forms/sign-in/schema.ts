import { z } from "zod";

export const formSignInSchema = z.object({
  email: z
    .string()
    .email("E-mail obrigatório")
    .min(1, { message: "Insira um e-mail" }),
  password: z
    .string()
    .min(6, { message: "Senha inválida, deve conter no mínimo 6 dígitos" }),
});
