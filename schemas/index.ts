import * as z from "zod";

export const loginSchema = z.object({
  username: z.string().min(1),
  password: z
    .string()
    .min(5, { message: "Password must be atleast 5 characters" }),
});

export const postSchema = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  subCategory: z.string().optional(),
  description: z.string().min(1),
  picture: z.string().url().min(1, "Image is required"),
  addedBy: z.string().min(1),
  post_id: z.string().min(1).optional(),
});

export const categorySchema = z.object({
  name: z.string().min(1),
});

export const commentsSchema = z.object({
  post_id: z.string().min(1),
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  comment: z.string().min(3, "Comment must be at least 10 characters"),
});
