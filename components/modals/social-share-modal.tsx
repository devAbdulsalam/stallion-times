"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { IoShareSocialOutline } from "react-icons/io5";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinkedin, SiWhatsapp } from "react-icons/si";
import { MdContentCopy } from "react-icons/md";
import { useToast } from "../ui/use-toast";

interface SocialShareModalProps {
  link: string;
}

const SocialShareModal = ({ link }: SocialShareModalProps) => {
  const { toast } = useToast();
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    toast({ title: "Copied to clipboard." });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="text-sm pl-4 pr-3 text-gray-600 dark:text-gray-100 flex flex-row items-center gap-3 hover:cursor-pointer hover:no-underline py-0"
        >
          <span className="hidden md:block">Share</span>
          <IoShareSocialOutline className="text-xl hover:cursor-pointer" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex items-center justify-between">
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            link
          )}`}
          target="_blank"
          className={buttonVariants({ variant: "outline" })}
        >
          <SlSocialFacebook className="h-6 w-6 sm:h-8 sm:w-8" />
        </Link>

        <Link
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            link
          )}`}
          target="_blank"
          className={buttonVariants({ variant: "outline" })}
        >
          <FaXTwitter className="h-6 w-6 sm:h-8 sm:w-8" />
        </Link>

        <Link
          href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
            link
          )}`}
          target="_blank"
          className={buttonVariants({ variant: "outline" })}
        >
          <SiLinkedin className="h-6 w-6 sm:h-8 sm:w-8" />
        </Link>

        <Link
          href={`https://wa.me/?text=${encodeURIComponent(link)}`}
          target="_blank"
          className={buttonVariants({ variant: "outline" })}
        >
          <SiWhatsapp className="h-6 w-6 sm:h-8 sm:w-8" />
        </Link>

        <Button variant={"outline"} onClick={() => handleCopy()}>
          <MdContentCopy className="h-6 w-6 sm:h-8 sm:w-8" />
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SocialShareModal;
