import { ReactNode, createContext, useEffect, useState, FC } from "react";

interface Seat {
  row: string;
  number: number;
}

interface SeatSelectionContextType {
  selectedSeats: Seat[];
  toggleSeatSelection: (seat: Seat) => void;
  seatCount: number;
}

export const SeatSelectionContext = createContext<
  SeatSelectionContextType | undefined
>(undefined);

export const SeatSelectionProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [seatCount, setSeatCount] = useState(0);

  const toggleSeatSelection = (seat: Seat) => {
    setSelectedSeats((prev) => {
      const isAlreadySelected = prev.some(
        (s) => s.row === seat.row && s.number === seat.number
      );
      if (isAlreadySelected) {
        return prev.filter(
          (s) => s.row !== seat.row || s.number !== seat.number
        );
      } else {
        return [...prev, seat];
      }
    });
  };

  useEffect(() => {
    setSeatCount(selectedSeats.length);
    console.log(selectedSeats);
    console.log(seatCount);
  }, [selectedSeats, seatCount]);

  return (
    <SeatSelectionContext.Provider
      value={{ selectedSeats, toggleSeatSelection, seatCount }}
    >
      {children}
    </SeatSelectionContext.Provider>
  );
};
