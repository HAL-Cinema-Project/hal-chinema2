"use client";

import CinemaSeats from "@/components/order_form/select_ticket/CinemaSeats";
import { TicketFormModal } from "@/components/order_form/select_ticket/TicketFormModal";
import {
  OrderIdContext,
  OrderIdProvider,
} from "@/components/order_form/store/OrderIdContext";
import { SeatSelectionProvider } from "@/components/order_form/store/SeatSelectionContext";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { id } = useParams();
  if (typeof id !== "string") {
    return <div>Invalid ID</div>;
  }
  return (
    <OrderIdProvider>
      <SeatSelectionProvider>
        <CinemaSeats />

        {id ? <TicketFormModal scheduleId={id as string} /> : null}
      </SeatSelectionProvider>
    </OrderIdProvider>
  );
};

export default Page;
