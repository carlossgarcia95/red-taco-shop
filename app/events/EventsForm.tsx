"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { BsCalendarWeekFill } from "react-icons/bs";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const EventFormSchema = z.object({
  name: z.string(),
  phoneNumber: z.string(),
  eventType: z.enum([
    "Birthday",
    "Corporate Event",
    "Competition",
    "Special Event",
  ]),
  crowdSize: z.enum(["1 - 50", "50 - 100", "100 - 500", "500+"]),
  email: z.string().email({ message: "Invalid email address" }),

  dob: z.date({
    required_error: "An event date is required",
  }),
});

export function EventForm() {
  const eventTypes = [
    "Birthday",
    "Corporate Event",
    "Competition",
    "Special Event",
    "Other",
  ];

  const crowdSize = ["1 - 50", "50 - 100", "100 - 500", "500+"];
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof EventFormSchema>>({
    resolver: zodResolver(EventFormSchema),
  });

  async function onSubmit(formData: z.infer<typeof EventFormSchema>) {
    try {
      setIsSubmitting(true);
      const formattedDate = format(formData.dob, "MMM dd, yyyy");
      const response = await axios.post("/api/sendEmail", {
        formData,
        formattedDate,
      });
      if (response.status === 200) {
        router.push("/");
        console.log(formData);
        toast.success("Quote request sent for the following date:", {
          description: format(formData.dob, "MMM dd, yyyy"),
        });
      }
    } catch (error) {
      toast.error("Something went wrong" + error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="p-4">
      <div className="mb-4">
        <p className="font-medium text-2xl">Book us for your event.</p>
        <p className="section-text">
          Fill out the form and get a personalized quote.
        </p>
      </div>
      <hr className="mb-4" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormDescription>Your name or organization.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="eventType"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Event Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the type of event" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {eventTypes.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Reason behind the event.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="crowdSize"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Crowd Size</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the crowd size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {crowdSize.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Amount of people you anticipate in your event.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Event Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <BsCalendarWeekFill className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  We will confirm if selected date is available.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? ("Sending...") : ("Submit")}
          </Button>
        </form>
      </Form>
    </Card>
  );
}
