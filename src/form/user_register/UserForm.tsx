import { Button } from "@yamada-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../InputField";
import { userSchema } from "./UserSchema";
import { SelectField } from "../SelectField";
import { createUser } from "../acrions/user";

export function UserForm() {
  const methods = useForm({
    resolver: zodResolver(userSchema),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => {
          createUser(data);
          window.location.reload();
        })}
      >
        <InputField fieldName='firstName' />
        <InputField fieldName='lastName' />
        <InputField fieldName='firstNameReading' />
        <InputField fieldName='lastNameReading' />
        {/* <InputField fieldName='gender' type='number' /> */}
        <SelectField
          fieldName="gender"
          label="gender"
          option={[
            { value: "1", label: "男性" },
            { value: "2", label: "女性" },
            { value: "3", label: "その他" },
        ]}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
}
