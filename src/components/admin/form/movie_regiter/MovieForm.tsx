import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../InputField";
import { movieSchema } from "./movieSchema";
import { createMovie } from "../acrions/movie";
import { Button } from "@yamada-ui/react";
export function MovieForm() {
  const methods = useForm({
    resolver: zodResolver(movieSchema),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => {
          createMovie(data);
          window.location.reload();
        })}
      >
        <InputField fieldName="movieName" />
        <InputField fieldName="director" />
        <InputField fieldName="summary" />
        <InputField fieldName="link" />
        <InputField fieldName="term" type="number" />
        <InputField fieldName="releaseDate" />
        <InputField fieldName="endDate" />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
}
