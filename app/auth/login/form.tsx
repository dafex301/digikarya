"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Notification from "@/components/molecules/notification";
import { loginSchema } from "./schema";
import { useState, useTransition } from "react";
import { login } from "./action";

export function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const [notification, setNotification] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // 1. Define your form.
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof loginSchema>) {
    setNotification(null);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    startTransition(() => {
      login(values).then((result) => {
        setNotification(result);
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  type="email"
                  placeholder="your@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  type="password"
                  placeholder="*****"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {notification && (
          <Notification
            message={notification.message}
            type={notification.success ? "success" : "error"}
          />
        )}
        <Button disabled={isPending} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
