import { useEffect, useState } from "react";
import { ScheduleMock } from "../types/schedule";
import { apiGet } from "../../util/apiClient";

export const useSchedules = () => {
  const [schedules, setSchedules] = useState<ScheduleMock[]>([]);

  const fetchData = async () => {
    try {
      const url = "http://localhost:8013/schedules";
      const res = await apiGet(url);
      setSchedules(res);
    } catch (error) {
      console.error("schedule service error: " + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { schedules, setSchedules };
};
