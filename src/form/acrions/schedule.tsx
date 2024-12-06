import { CreateSchedule } from "../../../../mock/types/schedule";
import { apiDelete, apiGet, apiPost } from "../../../../util/apiClient";

export const url = "http://localhost:8013/schedules";

export const createSchedule = async (data: CreateSchedule) => {
  try {
    const res = await apiPost(url, data);
    return res;
  } catch (error) {
    console.error("movie service error: " + error);
  }
};

export const getSchedules = async () => {
  try {
    const res = await apiGet(url);
    return res;
  } catch (error) {
    console.error("movie service error: " + error);
  }
};

export const getSchedule = async (scheduleId: number) => {
  try {
    const res = await apiGet(url + `/${scheduleId}`);
    return res;
  } catch (error) {
    console.error("movie service error: " + error);
  }
};

export const updateSchedule = async (
  scheduleId: number,
  data: CreateSchedule
) => {
  try {
    const res = await apiPost(url + `/${scheduleId}`, data);
    return res;
  } catch (error) {
    console.error("movie service error: " + error);
  }
};

export const deleteSchedule = async (scheduleId: number) => {
  try {
    const res = await apiDelete(url + `/${scheduleId}`);
    return res;
  } catch (error) {
    console.error("movie service error: " + error);
  }
};
