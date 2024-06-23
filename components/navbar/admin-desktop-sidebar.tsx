"use client";

import Link from "next/link";
import { Home, Users, FileText, Layout } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Cookies from "js-cookie";

const DesktopSidebar = () => {
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
      href: `/dashboard/admin/users`,
      label: "Users",
      active: pathname === `/dashboard/admin/users`,
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
    <aside className="flex-col border-r px-5 py-10 hidden lg:flex h-screen w-[15%] gap-10">
      <Link href="/" className="text-xl lg:text-2xl font-bold">
        <Image
          src={"/logo.png"}
          alt="logo"
          className="max-w-40 h-auto"
          width={500}
          height={500}
        />
      </Link>
      <ul className="flex flex-col transition-colors mt-3 justify-start">
        {routes.map((route, index) => (
          <li
            key={index}
            className="hover:bg-slate-100 rounded-md pl-1 pr-4 py-2"
          >
            <Link
              href={route.href}
              className={cn(
                "font-medium transition-colors hover:text-primary flex items-center ",
                route.active
                  ? "text-blackdark:text-white"
                  : "text-muted-foreground"
              )}
            >
              <route.icon className="mr-2" />
              <span>{route.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <Button variant={"outline"} onClick={() => logout()}>
        Sign Out
      </Button>
    </aside>
  );
};

export default DesktopSidebar;
