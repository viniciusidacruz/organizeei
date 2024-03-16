"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  Input,
  Button,
  FormItem,
  FormLabel,
  FormField,
  FormMessage,
  FormControl,
} from "@/components";

import { formSignUpSchema } from "./schema";
import { FormSignUpSchema } from "./sign-up.types";
import { useState } from "react";

export function FormSignUp() {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const form = useForm<FormSignUpSchema>({
    mode: "all",
    resolver: zodResolver(formSignUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormSignUpSchema) => {
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
          name="full_name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome completo</FormLabel>
              <FormControl>
                <Input placeholder="John doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                <Input
                  type={isVisiblePassword ? "text" : "password"}
                  placeholder="******"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="passwordConfirm"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirme a senha</FormLabel>
              <FormControl>
                <Input
                  type={isVisiblePassword ? "text" : "password"}
                  placeholder="******"
                  {...field}
                />
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

        <Button
          size="lg"
          type="submit"
          className="md:w-auto md:flex md:mx-auto w-full"
          disabled={!form.formState.isValid}
        >
          Cadastra-se
        </Button>

        <p className="text-sm text-center font-light text-gray-500">
          Já tem uma conta?{" "}
          <Link
            href="/entrar"
            className="font-medium text-primary hover:underline"
          >
            Entrar
          </Link>
        </p>
      </form>
    </Form>
  );
}
