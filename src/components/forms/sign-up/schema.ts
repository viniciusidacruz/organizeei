import { z } from "zod";

export const formSignUpSchema = z
  .object({
    email: z
      .string()
      .email("E-mail obrigatório")
      .min(1, { message: "Insira um e-mail" }),
    full_name: z
      .string()
      .min(1, { message: "Insira um nome completo" })
      .refine(
        (name) => {
          const names = name.split(" ");
          return names.length >= 2;
        },
        { message: "Por favor, insira nome e sobrenome!" }
      ),
    password: z
      .string()
      .min(6, { message: "Senha inválida, deve conter no mínimo 6 dígitos" })
      .refine(
        (password) => {
          // Verifica se a senha contém pelo menos um caractere especial, uma letra minúscula, uma letra maiúscula e um número
          return (
            /[!@#$%^&*(),.?":{}|<>]/.test(password) &&
            /[a-z]/.test(password) &&
            /[A-Z]/.test(password) &&
            /[0-9]/.test(password)
          );
        },
        {
          message:
            "A senha deve conter pelo menos um caractere especial, uma letra minúscula, uma letra maiúscula e um número",
        }
      ),
    passwordConfirm: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    {
      message: "As senhas devem ser as mesmas",
      path: ["passwordConfirm"],
    }
  );
