import { useFormContext } from "react-hook-form";

type InputFieldProps = {
  fieldName: string;
  type?: string;
  label: string;
};

export const InputField = (props: InputFieldProps) => {
  const { fieldName, type } = props;
  const { register, formState } = useFormContext();

  return (
    <>
      <label htmlFor={fieldName}>{fieldName}</label>
      <input type={type || "text"} {...register(fieldName)} />
      {formState.errors[fieldName] && (
        <span>{formState.errors[fieldName]!.message as string}</span>
      )}
    </>
  );
};
