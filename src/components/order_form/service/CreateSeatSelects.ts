import { FieldValues } from "react-hook-form";
import { OrdersDetail } from "../../../../mock/types/orders";
type SelectedSeat = {
  row: string;
  number: number;
};

export function CreateSeatSelects(
  data: FieldValues,
  selectedSeats: SelectedSeat[]
): OrdersDetail[] {
  const seatSelects: OrdersDetail[] = selectedSeats.map((seat) => {
    const seatKey = `${seat.row}${seat.number}`;
    const priceType = Number(data[seatKey]);
    const price = priceType === 0 ? 1800 : priceType === 1 ? 1500 : 1200;

    return {
      seatName: seatKey,
      priceType: priceType as number,
      price: price,
    };
  });

  return seatSelects;
}
