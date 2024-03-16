import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  Input,
  FormItem,
  FormField,
  FormControl,
  FormMessage,
  DialogTitle,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogDescription,
  Button,
} from "@/components";

import { formForgotPasswordSchema } from "./schema";
import { FormForgotPasswordSchema } from "./forgot-password-dialog.types";

export function ForgotPasswordDialog() {
  const form = useForm<FormForgotPasswordSchema>({
    mode: "all",
    resolver: zodResolver(formForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Ops, esqueceu sua senha?</DialogTitle>
        <DialogDescription>
          Insira seu e-mail para a recuperação
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form className="my-3">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="exemplo@exemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="secondary">Cancelar</Button>
        </DialogClose>
        <Button>Enviar</Button>
      </DialogFooter>
    </DialogContent>
  );
}
