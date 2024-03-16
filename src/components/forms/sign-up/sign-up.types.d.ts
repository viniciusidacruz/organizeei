import { z } from "zod";

import { formSignUpSchema } from "./schema";

export type FormSignUpSchema = z.infer<typeof formSignUpSchema>;
