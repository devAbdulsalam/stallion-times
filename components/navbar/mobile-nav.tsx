"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ScrollArea } from "../ui/scroll-area";
import Image from "next/image";
import axios from "axios";

export function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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

  const isAccordionItem = (name: string) => {
    return name === "news" || name === "civil-society";
  };

  const renderAccordionItems = (
    name: string,
    category_id: string,
    subItems: Subcategory[] | undefined
  ) => {
    return (
      <AccordionItem value={name} className="border-none">
        <AccordionTrigger className="py-0 font-normal hover:text-primary capitalize">
          <Link
            href={`/${name}/${category_id}`}
            onClick={() => setIsOpen(false)}
            className="hover:text-primary"
          >
            {name}
          </Link>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 pb-0 pt-4 pl-4">
          {subItems?.map((subItem, index: number) => (
            <Link
              href={`/${name.toLocaleLowerCase()}/${subItem.sub_category_name.toLowerCase()}/${
                subItem.sub_category_id
              }`}
              key={index}
              onClick={() => setIsOpen(false)}
              className="hover:text-primary"
            >
              {subItem.sub_category_name}
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="bg-gray-50 dark:bg-dark_background py-16 flex flex-col justify-between pl-8 text-gray-700 dark:text-white !pr-2"
      >
        <SheetHeader onClick={() => setIsOpen(false)}>
          <SheetTitle>
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

        <ScrollArea className="my-4 h-full pb-10 pr-4">
          <ul className="gap-5 flex flex-col">
            {categories.map(
              ({ subcategories, category_name, category_id }, index) => (
                <li key={index}>
                  {isAccordionItem(
                    category_name.toLocaleLowerCase().replace(/\s+/g, "-")
                  ) ? (
                    <Accordion
                      type="multiple"
                      defaultValue={["news", "civil-society"]}
                      className="w-full"
                    >
                      {renderAccordionItems(
                        category_name.toLocaleLowerCase().replace(/\s+/g, "-"),
                        category_id,
                        subcategories
                      )}
                    </Accordion>
                  ) : (
                    <Link
                      href={`/${category_name
                        .toLocaleLowerCase()
                        .replace(/\s+/g, "-")}/${category_id}`}
                      className={`${
                        pathname === category_name && `font-semibold`
                      } hover:text-primary`}
                      onClick={() => setIsOpen(false)}
                    >
                      {category_name}
                    </Link>
                  )}
                </li>
              )
            )}
          </ul>
        </ScrollArea>

        <SheetFooter className="!justify-start">
          <div className="flex flex-col gap-3">
            <h3>Contact Us</h3>

            <div className="flex gap-3">
              <Link href={"#"}>
                <FaXTwitter className="bg-primary rounded-[50%] sm:w-8 sm:h-8 h-8 w-8 flex items-center justify-center text-white p-2" />
              </Link>

              <Link href={"#"}>
                <FaInstagram className="bg-primary rounded-[50%] sm:w-8 sm:h-8 h-8 w-8 flex items-center justify-center text-white p-2" />
              </Link>

              <Link href={"#"}>
                <FaFacebook className="bg-primary rounded-[50%] sm:w-8 sm:h-8 h-8 w-8 flex items-center justify-center text-white p-2" />
              </Link>

              <Link href={"#"}>
                <FaWhatsapp className="bg-primary rounded-[50%] sm:w-8 sm:h-8 h-8 w-8 flex items-center justify-center text-white p-2" />
              </Link>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
