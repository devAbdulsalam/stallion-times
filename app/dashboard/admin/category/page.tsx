"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import { CategoryDialogForm } from "@/components/forms/category-dialog-form";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CategoryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<Category[]>([]);

  console.log(data);

  useEffect(() => {
    const GetAllCategories = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "https://stalliontimes.com/stallionTimes/api/get_categories.php",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log({ GetAllPostError: error });
      }
    };

    GetAllCategories();
  }, []);

  return (
    <div className="p-5 lg:p-10 space-y-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/admin">Admin</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <p className="hover:text-slate-950 hover:cursor-pointer">
                Category
              </p>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex justify-between items-center">
        <h3 className="text-xl">Recent Post</h3>
        <CategoryDialogForm isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className="container mx-auto py-10 px-0">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default CategoryPage;
