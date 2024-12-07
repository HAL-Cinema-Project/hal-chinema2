import { useFormContext } from "react-hook-form";

type InputFieldProps = {
  fieldName: string;
};

export const ImageField = (props: InputFieldProps) => {
  const { fieldName } = props;
  const { register, formState } = useFormContext();

  return (
    <>
      <label htmlFor={fieldName}>{fieldName}</label>
      <input
        type='file'
        accept='.png, .jpg'
        multiple
        {...register(fieldName)}
      />
      {formState.errors[fieldName] && (
        <span>{formState.errors[fieldName]!.message as string}</span>
      )}
    </>
  );
};
