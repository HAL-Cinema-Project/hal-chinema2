import { useContext } from "react";
import { SeatSelectionContext } from "../store/SeatSelectionContext";

export const useSeatSelection = () => {
  const context = useContext(SeatSelectionContext);
  if (!context) {
    throw new Error(
      "useSeatSelection must be used within a SeatSelectionProvider"
    );
  }
  return context;
};
