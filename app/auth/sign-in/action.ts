"use server";

import * as z from "zod";
import { loginSchema } from "./schema";

interface SignInBodyResponse {
  token: string;
}

export const login = async (values: z.infer<typeof loginSchema>) => {
  // Validate the values
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.message,
    };
  }

  const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (!res.ok) {
    return {
      success: false,
      message: "An error occurred",
    };
  }

  const data: SignInBodyResponse = await res.json();

  // TODO: Save the token to the session
  console.log(data);

  return {
    success: true,
    message: "Sign in successful",
  };
};
