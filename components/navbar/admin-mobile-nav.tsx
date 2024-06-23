"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

import { Home, Users, FileText, Layout, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Cookies from "js-cookie";

export function AdminMobileNav() {
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      href: `/dashboard/admin`,
      label: "Home",
      active: pathname === `/dashboard/admin`,
      icon: Home,
    },
    {
      href: `/dashboard/dashboard/admin/users`,
      label: "Users",
      active: pathname === `/dashboard/dashboard/admin/users`,
      icon: Users,
    },
    {
      href: `/dashboard/admin/post`,
      label: "Post",
      active: pathname === `/dashboard/admin/post`,
      icon: FileText,
    },
    {
      href: `/dashboard/admin/category`,
      label: "Category",
      active: pathname === `/dashboard/admin/category`,
      icon: Layout,
    },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    Cookies.remove("token");
    router.push("/login");
  };

  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="bg-gray-50 dark:bg-dark_background py-16 flex flex-col justify-between px-8 text-gray-700 dark:text-white"
      >
        <SheetHeader>
          <SheetTitle asChild className="flex justify-start">
            <Link href="/" className="text-xl lg:text-2xl font-bold">
              <Image
                src={"/logo.png"}
                alt="logo"
                className="max-w-40 h-auto"
                width={500}
                height={500}
              />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col">
          {routes.map((route, index) => (
            <li
              key={index}
              className="uppercase hover:text-primary hover:bg-slate-100 rounded-md pl-1 pr-4 py-2 dark:hover:text-gray-200 dark:text-white font-medium text-sm"
            >
              <Link href={route.href}>{route.label}</Link>
            </li>
          ))}
        </ul>

        <SheetFooter>
          <Button variant={"outline"} onClick={() => logout()}>
            Sign Out
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
