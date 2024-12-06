import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string().nonempty({ message: "姓は必須です" }),
  lastName: z.string().nonempty({ message: "名は必須です" }),
  firstNameReading: z.string().nonempty({ message: "姓のフリガナは必須です" }),
  lastNameReading: z.string().nonempty({ message: "名のフリガナは必須です" }),
  // gender: z.string().nonempty({ message: "性別は必須です" }),
  gender: z.string({message: "性別は必須です"}).transform((val) => Number(val)),
});
