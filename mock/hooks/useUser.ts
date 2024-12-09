import { useEffect, useState } from "react";
import { UserMock } from "../types/user";
import { apiGet } from "@/utils/apiClient";

export const useUser = (userId: string) => {
  const [user, setUser] = useState<UserMock>();

  const fetchData = async (userId: string) => {
    try {
      const url = `http://localhost:8014/users/${userId}`;
      const res = await apiGet(url);

      setUser(res);
    } catch (error) {
      console.error("user service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(userId);
  }, [userId]);

  return { user, setUser };
};
