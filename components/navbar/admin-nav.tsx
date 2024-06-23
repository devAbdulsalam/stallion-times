import { User } from "lucide-react";
import { AdminMobileNav } from "@/components/navbar/admin-mobile-nav";

const AdminNavbar = () => {
  return (
    <nav className="text-black bg-white dark:bg-dark_background shadow-md dark:shadow-gray-700 px-5 flex items-center w-full justify-between py-4 xl:px-24 lg:px-8">
      <AdminMobileNav />

      <div className="flex gap-5 justify-end ml-auto">
        <User className="h-8 w-8" />
      </div>
    </nav>
  );
};

export default AdminNavbar;
