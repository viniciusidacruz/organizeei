import { z } from "zod";

import { formForgotPasswordSchema } from "./schema";

export type FormForgotPasswordSchema = z.infer<typeof formForgotPasswordSchema>;
