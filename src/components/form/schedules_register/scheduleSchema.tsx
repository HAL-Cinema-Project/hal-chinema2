import { z } from "zod";

export const scheduleSchema = z.object({
  id: z.number({
    message: "IDは必須です",
  }),
  movieId: z.number({
    message: "映画IDは必須です",
  }),
  movieName: z.string({
    message: "映画名は必須です",
  }),
  theater: z.string({
    message: "シアター名は必須です",
  }),
  startTime: z.string({
    message: "開始時間は必須です",
  }),
  endTime: z.string({
    message: "終了時間は必須です",
  }),
  isAvailable: z.boolean({
    message: "予約可能かどうかは必須です",
  }),
});