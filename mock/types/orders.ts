export interface OrdersDetail {
  seatName?: string;
  priceType?: number;
  price?: number;
}
export interface OrdersMock {
  id?: number;
  userId?: number;
  movieName?: string;
  screen?: string;
  orderDetail?: OrdersDetail[];
}

export type CreateOrder = Partial<OrdersMock>;
