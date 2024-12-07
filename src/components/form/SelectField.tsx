import { NativeSelect } from "@yamada-ui/react";
import { useFormContext } from "react-hook-form";
type InputFieldProps = {
  fieldName: string;
  label: string;
  option: Option[];
};

type Option = {
  value: string;
  label: string;
};
export const SelectField = (props: InputFieldProps) => {
  const { fieldName, label, option } = props;
  const { register, formState } = useFormContext();

  return (
    <>
      <label htmlFor={fieldName}>{label}</label>
      <NativeSelect {...register(fieldName)}>
        {option.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </NativeSelect>
      {formState.errors[fieldName] && (
        <span>{formState.errors[fieldName]!.message as string}</span>
      )}
    </>
  );
};
