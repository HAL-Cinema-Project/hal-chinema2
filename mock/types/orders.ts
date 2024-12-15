export interface OrdersDetail {
  seatName?: string;
  priceType?: number;
  price?: number;
}
export interface OrdersMock {
  id?: string;
  userId?: string;
  movieId?: string;
  screen?: string;
  orderDetail?: OrdersDetail[];
}

export type CreateOrder = Partial<OrdersMock>;
