import { z } from "zod";

export const formForgotPasswordSchema = z.object({
  email: z
    .string()
    .email("E-mail obrigatório")
    .min(1, { message: "Insira um e-mail" }),
});
