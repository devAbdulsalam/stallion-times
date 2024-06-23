"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit, Plus } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Dispatch, SetStateAction, useState } from "react";
import { categorySchema } from "@/schemas";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";

type CategoryFormValues = z.infer<typeof categorySchema>;

interface CategoryDialogFormProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  initialData?: Category;
}

export function CategoryDialogForm({
  isOpen,
  setIsOpen,
  initialData,
}: CategoryDialogFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // console.log(initialData);

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: initialData
      ? {
          name: initialData.category_name,
        }
      : {
          name: "",
        },
  });

  const onSubmit = async (values: CategoryFormValues) => {
    try {
      const token = localStorage.getItem("token");

      if (initialData) {
        //PUT
        const newValues = { id: initialData.category_id, ...values };
        console.log(newValues);

        setIsLoading(true);
        const { data } = await axios.put(
          "https://stalliontimes.com/stallionTimes/api/update_category.php",
          newValues,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        toast({ title: "Category has updated" });
        console.log(data);
      } else {
        // POST
        setIsLoading(true);
        console.log(values);

        const { data } = await axios.post(
          "https://stalliontimes.com/stallionTimes/api/add_category.php",
          values,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast({ title: "Category has created" });
        console.log(data);
      }
      form.reset();
      router.refresh();
      setIsOpen(false);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="flex items-center">
          {initialData ? (
            <Edit className="h-6 w-6" />
          ) : (
            <>
              <span>Add Category</span> <Plus className="h-6 w-6" />
            </>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] py-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {initialData ? "Edit category" : "Add Category"}
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="h-[300px]">
                      <SelectItem value="news">News</SelectItem>
                      <SelectItem value="civil-society">
                        Civil Society
                      </SelectItem>
                      <SelectItem value="peace&security">
                        Peace & Security
                      </SelectItem>
                      <SelectItem value="entertaiment">
                        Entertainment
                      </SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="opinion">Opinion</SelectItem>
                      <SelectItem value="politics">Politics</SelectItem>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="national">National</SelectItem>
                      <SelectItem value="africa">Africa</SelectItem>
                      <SelectItem value="world">World</SelectItem>
                      <SelectItem value="anti-corruption">
                        Anti-Corruption
                      </SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="un-women">UN-Women</SelectItem>
                      <SelectItem value="climate-change">
                        Climate-Change
                      </SelectItem>
                      <SelectItem value="health">Health</SelectItem>
                      <SelectItem value="water">Water</SelectItem>
                    </SelectContent>
                    <FormMessage />
                  </Select>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
