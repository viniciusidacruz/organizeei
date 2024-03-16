import { z } from "zod";

import { formSignInSchema } from "./schema";

export type FormSignInSchema = z.infer<typeof formSignInSchema>;
