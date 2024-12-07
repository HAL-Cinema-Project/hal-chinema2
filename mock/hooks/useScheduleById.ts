import { useEffect, useState } from "react";
import { ScheduleMock } from "../types/schedule";
import { apiGet } from "@/utils/apiClient";

export const useScheduleById = (scheduleId: string) => {
  const [schedule, setSchedule] = useState<ScheduleMock>();

  const fetchData = async (scheduleId: string) => {
    try {
      const url = "http://localhost:8013/schedules";
      const res = await apiGet(url + `/${scheduleId}`);
      setSchedule(res);
    } catch (error) {
      console.error("schedule service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(scheduleId);
  }, [scheduleId]);

  return { schedule, setSchedule };
};
