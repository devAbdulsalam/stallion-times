"use client";

import Link from "next/link";
import { Search } from "lucide-react";

import { MobileNav } from "@/components/navbar/mobile-nav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const pathname = usePathname();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const GetAllCategories = async () => {
      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/get_categories.php`;
      try {
        const response = await axios.get(url);

        setCategories(response.data);
      } catch (error) {
        console.log({ GetAllPostError: error });
      }
    };

    GetAllCategories();
  }, []);

  return (
    <nav className="z-50 sticky top-0 left-0 text-black bg-white dark:bg-dark_background shadow-md dark:shadow-gray-700 px-5 flex items-center w-full justify-between py-4 xl:px-24 lg:px-8">
      <MobileNav />

      <Link href="/" className="text-xl lg:text-2xl font-bold">
        <Image
          src={"/logo.png"}
          alt="logo"
          className="max-w-40 h-[54px]"
          width={500}
          height={500}
        />
      </Link>

      <ul className="hidden lg:flex gap-8 font-light text-sm 2xl:text-lg">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center justify-center">
            {categories.map((item, index) => (
              <NavigationMenuItem key={index} className="">
                {item.subcategories.length > 1 ? (
                  <>
                    <NavigationMenuTrigger
                      className={`p-2 hover:bg-background font-normal
                        ${pathname === item.category_name && `font-semibold`}
                      `}
                    >
                      <Link
                        href={`/${item.category_name
                          .toLocaleLowerCase()
                          .replace(/\s+/g, "-")}/${item.category_id}`}
                      >
                        {item.category_name}
                      </Link>
                    </NavigationMenuTrigger>
                    {item.subcategories.length > 1 && (
                      <NavigationMenuContent className="grid w-[400px] p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.subcategories.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            title={subItem.sub_category_name}
                            href={`/${item.category_name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}/${subItem.sub_category_name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}/${
                              subItem.sub_category_id
                            }`}
                            className="p-[0.725rem] hover:bg-slate-50 rounded-md"
                          >
                            {subItem.sub_category_name}
                          </Link>
                        ))}
                      </NavigationMenuContent>
                    )}
                  </>
                ) : (
                  <Link
                    href={`/${item.category_name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}/${item.category_id}`}
                    className={`${
                      pathname.includes(
                        item.category_name.toLowerCase().replace(/\s+/g, "-")
                      ) && `font-semibold`
                    } p-[0.725rem] hover:bg-slate-50 rounded-md font-medium`}
                  >
                    {item.category_name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </ul>

      {/* <div className="border-0 lg:border-[1px] md:w-auto py-2 rounded-full dark:border-gray-100 lg:shadow-sm lg:hover:shadow-md transition w-fit"> */}
      <Link
        href="/search"
        className="text-sm lg:px-4 text-gray-600 dark:text-gray-100 flex flex-row items-center cursor-pointer"
      >
        <Search className="p-2 bg-primary rounded-full text-white flex items-center justify-center w-10 h-10" />
      </Link>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
