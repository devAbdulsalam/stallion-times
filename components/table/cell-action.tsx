"use client";

import axios from "axios";
import { useState } from "react";
import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { AlertModal } from "@/components/modals/alert-modal";
import { useToast } from "@/components/ui/use-toast";
import { CategoryDialogForm } from "@/components/forms/category-dialog-form";

interface CellActionProps {
  data: Category;
}

export const CellAction = ({ data }: CellActionProps) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  // trigger delete modal
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // trigger update modal
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);

  const { toast } = useToast();

  const onDelete = async () => {
    const token = localStorage.getItem("token");

    try {
      setLoading(true);
      const resposnse = await axios.delete(
        `https://stalliontimes.com/stallionTimes/api/delete_category.php?category_id=${data.category_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(resposnse.data);

      router.refresh();
      // window.location.reload();
      toast({ title: "Category deleted.", variant: "destructive" });
    } catch (error) {
      toast({ title: "Something went wrong.", variant: "destructive" });
      console.log(error);
    } finally {
      setLoading(false);
      setIsDeleteOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex">
        <CategoryDialogForm
          isOpen={isUpdateOpen}
          setIsOpen={setIsUpdateOpen}
          initialData={data}
        />
        <Button variant={"ghost"} onClick={() => setIsDeleteOpen(true)}>
          <Trash className="h-6 w-6" />
        </Button>
      </div>
    </>
  );
};
