import AdminNavbar from "@/components/navbar/admin-nav";
import DesktopSidebar from "@/components/navbar/admin-desktop-sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <DesktopSidebar />
      <div className="w-full">
        <AdminNavbar />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
