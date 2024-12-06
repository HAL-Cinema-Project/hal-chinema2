import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@yamada-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { InputField } from "../InputField";
import { scheduleSchema } from "./scheduleSchema";
import { createSchedule } from "../acrions/schedule";

export function ScheduleForm() {
  const methods = useForm({
    resolver: zodResolver(scheduleSchema),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => {
          createSchedule(data);
          window.location.reload();
        })}
      >
        <InputField fieldName='id' type='number' />
        <InputField fieldName='movieId' type='number' />
        <InputField fieldName='movieName' />
        <InputField fieldName='theater' />
        <InputField fieldName='startTime' />
        <InputField fieldName='endTime' />
        <InputField fieldName='isAvailable' />

        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
}
