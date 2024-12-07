"use client";

import { ScheduleTable } from "@/components/admin/data-table/ScheduleTable";
import { AddSchedulesModal } from "@/components/admin/form/modal/AddSchedulesModal";

const Page = () => {
  return (
    <div>
      <AddSchedulesModal />
      <ScheduleTable />
    </div>
  );
};

export default Page;
