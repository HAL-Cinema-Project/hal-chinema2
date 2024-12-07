"use client";

import CinemaSeats from "@/components/order_form/select_ticket/CinemaSeats";
import { TicketFormModal } from "@/components/order_form/select_ticket/TicketFormModal";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { id } = useParams();
  return (
    <div>
      <CinemaSeats />

      {id ? <TicketFormModal scheduleId={id as string} /> : null}
    </div>
  );
};

export default Page;
