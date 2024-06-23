import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const UsersPage = () => {
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
              <p className="hover:text-slate-950 hover:cursor-pointer">Users</p>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h2 className="text-xl">Users</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse text-left">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">
                S/N
              </th>
              <th className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">
                Username
              </th>
              <th className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">
                Email
              </th>
              <th className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">
                Position
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                1
              </td>
              <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                Yourdailyview
              </td>
              <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                dailyview@gmail.com
              </td>
              <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                User
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                2
              </td>
              <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                Farex
              </td>
              <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                farex@gmail.com
              </td>
              <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                Admin
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
