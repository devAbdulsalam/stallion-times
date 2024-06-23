import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users } from "lucide-react";

const overview = [
  {
    count: 4,
    label: "Users",

    icon: Users,
  },
  {
    count: 2,
    label: "Active Users",

    icon: Users,
  },
  {
    count: 0,
    label: "Disabled Users",
    icon: Users,
  },
  {
    count: 1,
    label: "Admin Users",
    icon: Users,
  },
  {
    count: 126,
    label: "Post",
    icon: FileText,
  },
  {
    count: 0,
    label: "Unapproved Post",
    icon: FileText,
  },
  {
    count: 126,
    label: "Approved Post",
    icon: FileText,
  },
  {
    count: 0,
    label: "Comments",
    icon: FileText,
  },
];

const AdminPage = () => {
  return (
    <div className="p-5 lg:p-10 space-y-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/admin">Admin</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <p className="hover:text-slate-950 hover:cursor-pointer">Home</p>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="text-xl">Welcome</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {overview.map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">
                {item.label}
              </CardTitle>
              <item.icon className="h-8 w-8 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <span className="text-xl font-bold">{item.count}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
