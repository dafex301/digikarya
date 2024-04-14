"use server";

import * as z from "zod";
import { loginSchema } from "./schema";

export const login = async (values: z.infer<typeof loginSchema>) => {
  // Add a timeout of 5 seconds
  const timeout = 2000; // 5 seconds
  await new Promise((resolve) => setTimeout(resolve, timeout));

  // Validate the values
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.message,
    };
  }

  return {
    success: true,
    message: "Login successful",
  };
};
