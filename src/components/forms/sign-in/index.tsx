"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  Input,
  Button,
  Dialog,
  FormItem,
  FormLabel,
  FormField,
  FormMessage,
  FormControl,
  DialogTrigger,
} from "@/components";

import { formSignInSchema } from "./schema";
import { FormSignInSchema } from "./sign-in.types";
import { ForgotPasswordDialog } from "./components/forgot-password-dialog";
import { useState } from "react";

export function FormSignIn() {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const form = useForm<FormSignInSchema>({
    mode: "all",
    resolver: zodResolver(formSignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormSignInSchema) => {
    console.log(data);
  };

  const handleVisibilityPassword = () =>
    setIsVisiblePassword((prevState) => !prevState);

  return (
    <Form {...form}>
      <form
        className="space-y-4 md:space-y-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu e-mail</FormLabel>
              <FormControl>
                <Input placeholder="exemplo@exemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input placeholder="******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="button"
          variant="ghost"
          className="flex ml-auto"
          onClick={handleVisibilityPassword}
        >
          {isVisiblePassword ? "Esconder senha" : "Mostrar senhas"}
        </Button>

        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <Dialog>
            <DialogTrigger asChild>
              <Button type="button" variant="link" className="p-0">
                Esqueceu sua senha?
              </Button>
            </DialogTrigger>

            <ForgotPasswordDialog />
          </Dialog>
          <Button
            size="lg"
            type="submit"
            className="md:w-auto w-full"
            disabled={!form.formState.isValid}
          >
            Entrar
          </Button>
        </div>

        <p className="text-sm text-center font-light text-gray-500">
          Não tem uma conta?{" "}
          <Link
            href="/cadastra-se"
            className="font-medium text-primary hover:underline"
          >
            Cadastra-se
          </Link>
        </p>
      </form>
    </Form>
  );
}
