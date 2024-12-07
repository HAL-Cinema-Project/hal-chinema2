"use client";

import { UserTable } from "@/components/admin/data-table/UserTable";
import { AddUserModal } from "@/components/admin/form/modal/AddUserModal";

const Page = () => {
  return (
    <div>
      <AddUserModal />
      <UserTable />
    </div>
  );
};

export default Page;
