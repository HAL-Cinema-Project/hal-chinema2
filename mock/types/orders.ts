export interface OrdersDetail {
  seatName?: string;
  priceType?: number;
  price?: number;
}
export interface OrdersMock {
  id?: string;
  userId?: string;
  movieId?: number;
  screen?: string;
  orderDetail?: OrdersDetail[];
}

export type CreateOrder = Partial<OrdersMock>;
