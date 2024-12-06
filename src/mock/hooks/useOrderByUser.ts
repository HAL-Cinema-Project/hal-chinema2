import { useEffect, useState } from "react";
import { OrdersMock } from "../types/orders";
import { apiGet } from "../../util/apiClient";

export const useOrderByUser = (userId: number) => {
  const [orders, setOrders] = useState<OrdersMock[]>([]);

  const fetchData = async (userId?: number) => {
    try {
      const url = "http://localhost:8012/orders";
      const customUrl = url + `?userId=${userId}`;
      const res = await apiGet(customUrl);
      setOrders(res);
    } catch (error) {
      console.error("order service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(userId);
  }, [userId]);

  return { orders, setOrders };
};
