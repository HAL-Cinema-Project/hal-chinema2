import { apiPost, apiGet, apiDelete } from "@/utils/apiClient";
import { CreateSchedule } from "../../../../../mock/types/schedule";

export const url = "http://localhost:8013/schedules";

// 日付をフォーマットする関数
const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

// 日付を増加させる関数
const addDays = (date: Date, days: number) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

// 開始日と終了日の間の日数を計算する関数
const differenceInDays = (start: Date, end: Date) => {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((end.getTime() - start.getTime()) / oneDay));
}

// 複数のスケジュールを作成する関数
export const createSchedule = async (data: CreateSchedule) => {
  const { startTime, endTime, ...rest } = data;

  // startTimeとendTimeが未定義でないことを確認
  if (!startTime || !endTime) {
    throw new Error("startTime and endTime are required");
  }

  // 開始日と終了日の間の日数を計算
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  const daysDifference = differenceInDays(startDate, endDate);

  try {
    for (let i = 0; i <= daysDifference; i++) {
      // 日付を増加させてスケジュールを作成
      const newStartDate = addDays(startDate, i);
      const newEndDate = addDays(startDate, i); // 同日終了の場合

      // スケジュールの日時をフォーマット
      const formattedStartTime = formatDate(newStartDate);
      const formattedEndTime = formatDate(newEndDate);

      const newSchedule = {
        ...rest,
        startTime: formattedStartTime,
        endTime: formattedEndTime,
      };

      // スケジュールを登録
      await apiPost(url, newSchedule);
    }

    console.log("All schedules created successfully");
  } catch (error) {
    console.error("Error creating schedules: " + error);
  }
};

// 他のAPI関数

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
