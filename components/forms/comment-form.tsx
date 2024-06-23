"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { commentsSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
type CommentsFormValues = z.infer<typeof commentsSchema>;

interface CommentsFormProps {
  postId: string;
}

export default function CommentsForm({ postId }: CommentsFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<CommentsFormValues>({
    resolver: zodResolver(commentsSchema),
    defaultValues: {
      post_id: postId,
      name: "",
      email: "",
      comment: "",
    },
  });

  const onSubmit = async (values: CommentsFormValues) => {
    console.log(values);

    try {
      setIsLoading(true);
      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/add_comment.php`;

      const { data } = await axios.post(url, values, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(data);
      setIsLoading(false);
      form.reset();
      router.refresh();
      toast({ title: "Comment has been added." });
    } catch (error) {
      console.log({ CommentsError: error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 w-full lg:w-1/2" id="comments">
      <div>
        <h2 className="text-2xl font-bold">Leave a Comment</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Share your thoughts on this post.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid lg:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Your Name" {...field} />
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
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comment</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter your comments" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isLoading}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
