"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { postSchema } from "@/schemas";
import ImageUpload from "@/components/image-upload";
import { useToast } from "@/components/ui/use-toast";

type PostFormValues = z.infer<typeof postSchema>;
interface PostFormProps {
  initialData?: Post | null;
}
interface PostSubCategory {
  id: number;
  sub_category_id: string;
  cat_id: string;
  name: string;
  date: string;
  status: string;
}

export function PostForm({ initialData }: PostFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategory, setSubCategory] = useState<PostSubCategory[]>([]);
  const [categoryId, setCategoryId] = useState<string | null>(null);

  useEffect(() => {
    const GetAllCategories = async () => {
      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/get_categories.php`;
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCategories(response.data);
      } catch (error) {
        console.log({ GetAllPostError: error });
      }
    };

    GetAllCategories();
  }, []);

  useEffect(() => {
    const GetSubCategory = async () => {
      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/get_subCategoryById.php?category_id=${categoryId}`;
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSubCategory(response.data);
      } catch (error) {
        console.log({ GetSubCategory: error });
      }
    };

    GetSubCategory();
  }, [categoryId]);

  const { toast } = useToast();

  const form = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: initialData
      ? {
          title: initialData?.title,
          category: initialData?.cat_id,
          subCategory: initialData?.sub_cat_id,
          description: initialData?.description,
          picture: initialData?.picture,
          addedBy: initialData?.added_by,
        }
      : {
          title: "",
          category: "",
          subCategory: "",
          description: "",
          picture: "",
          addedBy: "",
        },
  });

  useEffect(() => {
    if (initialData) {
      form.setValue("title", initialData.title);
      form.setValue("category", initialData.cat_id);
      form.setValue("subCategory", initialData.sub_cat_id);
      form.setValue("description", initialData.description);
      form.setValue("picture", initialData.picture);
      form.setValue("addedBy", initialData.added_by);
      form.setValue("post_id", initialData.post_id);
    }
  }, [initialData, form]);

  // console.log(initialData);
  console.log(form.getValues());

  const handleCategoryChange = (value: string) => {
    setCategoryId(value);
  };

  function slugify(title: string) {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-"); 
  }

  const onSubmit = async (values: PostFormValues) => {
    const updateUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/update_post.php`;
    const postUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/post_blog.php`;
    console.log(values);
    try {
      const token = localStorage.getItem("token");

      if (initialData) {
        // PUT REQUEST
        setIsLoading(true);
        console.log(values);

        const { data } = await axios.put(updateUrl, values, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        console.log(data);
        setIsLoading(false);
        toast({ title: "Post has been updated." });
        router.push("/dashboard/admin/post");
      } else {
        //  POST REQUEST
        console.log(values);

        setIsLoading(true);
        const { data } = await axios.post(postUrl, values, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(data);
        setIsLoading(false);
        form.reset();
        toast({ title: "Post has been created." });
        router.push("/dashboard/admin/post");
      }
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="p-5 lg:p-10 space-y-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/admin">Admin</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/admin/post">Post</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:cursor-pointer">
              {initialData ? "Edit post" : "Create post"}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-[550px] space-y-6"
        >
          <FormField
            control={form.control}
            name="picture"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={field.value}
                    disabled={isLoading}
                    onChange={(url) => field.onChange(url)}
                    onRemove={() => field.onChange("")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="addedBy"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder="Author" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col lg:flex-row justify-between w-full gap-3">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={(value: string) => {
                      field.onChange(value);
                      handleCategoryChange(value);
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem
                          value={category.category_id}
                          className="capitalize"
                          key={category.category_id}
                        >
                          {category.category_name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                    <FormMessage />
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subCategory"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Sub Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select sub-category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {subCategory
                        ? subCategory.map((item) => (
                            <SelectItem
                              value={item.sub_category_id}
                              className="capitalize"
                              key={item.sub_category_id}
                            >
                              {item.name}
                            </SelectItem>
                          ))
                        : ""}
                    </SelectContent>
                    <FormMessage />
                  </Select>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <ReactQuill
                    theme="snow"
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {initialData ? "Edit Post" : "Create Post"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
