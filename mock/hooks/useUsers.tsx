import { useEffect, useState } from "react";
import { UserMock } from "../types/user";
import { apiGet } from "@/utils/apiClient";
export const useUser = (pageId?: string, pageSize?: string) => {
  const [user, setUser] = useState<UserMock[]>([]);

  const fetchData = async (pageId?: string, pageSize?: string) => {
    try {
      const url = "http://localhost:8014/users";
      const res = await apiGet(url + `?pageId=${pageId}&pageSize=${pageSize}`);
      setUser(res);
    } catch (error) {
      console.error("user service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(pageId, pageSize);
  }, [pageId, pageSize]);

  return { user, setUser };
};
