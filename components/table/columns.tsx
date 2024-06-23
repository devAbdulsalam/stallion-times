"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
