export interface OrdersDetail {
  seatName?: string;
  priceType?: number;
  price?: number;
}
export interface OrdersMock {
  id?: string;
  userId?: string;
  movieName?: string;
  screen?: string;
  orderDetail?: OrdersDetail[];
}

export type CreateOrder = Partial<OrdersMock>;
