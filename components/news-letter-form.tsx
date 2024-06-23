import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsLetterForm() {
  return (
    <div className="flex w-full max-w-md items-center space-x-2 my-5">
      <Input
        className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-gray-500 dark:focus:ring-gray-500"
        placeholder="Enter your email"
        type="email"
      />
      <Button>Subscribe</Button>
    </div>
  );
}
