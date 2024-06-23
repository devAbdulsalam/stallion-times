"use client";

import Image from "next/image";
import { ImagePlus, Trash, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ImageUploadProps {
  disabled: boolean;
  onChange: (value: string) => void;
  onRemove: () => void;
  value: string;
}

const ImageUpload = ({
  disabled,
  onChange,
  onRemove,
  value,
}: ImageUploadProps) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  const onDelete = () => {
    onRemove();
    console.log("REMOVED");
    
    router.refresh();
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className="mb-4 flex flex-col items-center gap-4">
        {value && (
          <div className="relative w-full h-[300px] rounded-md overflow-hidden ">
            <div className="z-10 absolute top-2 right-2">
              <Button
                type="button"
                onClick={() => onDelete()}
                variant={"destructive"}
              >
                <Trash className="h-2 w-4" />
              </Button>
            </div>

            <Image fill className="object-cover" alt="Image" src={value} />
          </div>
        )}
      </div>

      <CldUploadWidget onSuccess={onUpload} uploadPreset="syue2dwi">
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button
              type="button"
              disabled={disabled}
              variant={"secondary"}
              onClick={onClick}
              className="z-50"
            >
              <ImagePlus className="h-4 w-4 mr-2" />
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
