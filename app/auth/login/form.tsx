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
              <FormLabel className="dark:text-gray-500 text-xs">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  type="email"
                  placeholder="your@email.com"
                  {...field}
                  className="text-gray-800 dark:bg-white border-b-2 border-t-0 border-x-0 rounded-none border-gray-200 px-1"
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
              <FormLabel className="dark:text-gray-500 text-xs">
                Password
              </FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  type="password"
                  placeholder="*****"
                  className="text-gray-800 dark:bg-white border-b-2 border-t-0 border-x-0 rounded-none border-gray-200 px-1"
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
        <div className="flex justify-end">
          <Button
            disabled={isPending}
            type="submit"
            className="bg-blue-900 hover:bg-blue-800 text-white rounded-full"
          >
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
}
