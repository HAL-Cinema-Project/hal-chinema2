import { useEffect, useState } from "react";
import { OrdersMock } from "../types/orders";
import { apiGet } from "@/utils/apiClient";

export const useOrders = (userId: number) => {
  const [orders, setOrders] = useState<OrdersMock[]>([]);

  const fetchData = async (userId: number) => {
    try {
      const url = "http://localhost:8012/orders";
      const res = await apiGet(url);
      const data = await res.json();
      setOrders(data);
    } catch (error) {
      console.error("order service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(userId);
  }, [userId]);

  return { orders, setOrders };
};
