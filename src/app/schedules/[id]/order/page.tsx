"use client";

import CinemaSeats from "@/components/order_form/select_ticket/CinemaSeats";
import { OrderIdProvider } from "@/components/order_form/store/OrderIdContext";
import { SeatSelectionProvider } from "@/components/order_form/store/SeatSelectionContext";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = () => {
  const { id: scheduleId } = useParams();
  const [movieId, setMovieId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof scheduleId === "string") {
      axios
        .get(`http://localhost:8013/schedules/${scheduleId}`)
        .then(response => {
          setMovieId(response.data.movieId);
        })
        .catch(error => {
          console.error("Error fetching schedule details:", error);
        });
    }
  }, [scheduleId]);

  if (typeof scheduleId !== "string" || !movieId) {
    return <div>Loading...</div>;
  }

  return (
    <OrderIdProvider>
      <SeatSelectionProvider movieId={movieId}>
        <CinemaSeats scheduleId={scheduleId} />
      </SeatSelectionProvider>
    </OrderIdProvider>
  );
};

export default Page;
