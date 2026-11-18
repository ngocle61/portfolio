import type { FieldValues } from 'react-hook-form';

export const InputField = <TValues extends FieldValues>({
  name,
  label,
  description,
  ...inputProps
}: InputFieldProps<TValues>) => {
  const { field, fieldRef, shellProps, controlProps } = useFormField<TValues>({
    name,
    label,
    description,
  });

  return (
    <FormFieldShell {...shellProps}>
      <Input
        ref={fieldRef}
        {...inputProps}
        {...field}
        {...controlProps}
        value={field.value ?? ''}
      />
    </FormFieldShell>
  );
};
