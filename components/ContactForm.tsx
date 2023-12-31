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
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { Textarea } from "./ui/textarea";

const ContactFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Field must not be empty" }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (formData: z.infer<typeof ContactFormSchema>) => {
    try {
      setIsSubmitting(true);
      const response = await axios.post("/api/sendEmail", formData);
      if (response.status === 200)
        toast.success("Your message has been sent successfully.");
    } catch (error) {
      toast.error("Something went wrong. " + error);
    }
    setIsSubmitting(false);
    form.reset();
    toast.success("Your message has been sent successfully.");
    form.reset();
  };

  return (
    <div className="w-full md:w-2/3 max-w-lg text-left rounded-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white font-bold">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white font-bold">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Leave us a message...."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
