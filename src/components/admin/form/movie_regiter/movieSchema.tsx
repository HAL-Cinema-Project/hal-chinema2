import { z } from "zod";

export const movieSchema = z.object({
  movieName: z.string().nonempty({ message: "映画名は必須です" }),
  director: z.string().nonempty({ message: "監督名は必須です" }),
  summary: z.string().nonempty({ message: "あらすじは必須です" }),
  link: z.string().nonempty({ message: "リンクは必須です" }),
  term: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: "数字を入力してください",
  }),
  startDate: z.string().nonempty({ message: "公開日は必須です" }),
  endDate: z.string().nonempty({ message: "終了日は必須です" }),
});
