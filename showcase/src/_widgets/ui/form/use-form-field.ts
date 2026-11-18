import { useController, type FieldValues } from 'react-hook-form';

export const useFormField = <TValues extends FieldValues>({
  name,
  label,
  description,
  disabled,
}: BaseFieldProps<TValues>): FormFieldBinding<TValues> => {
  const ids = useFieldIds();
  const {
    field: { ref: fieldRef, ...field },
    fieldState,
  } = useController<TValues>({ name, disabled });

  return {
    field,
    fieldRef,
    shellProps: { ids, label, description, error: fieldState.error, disabled },
    controlProps: {
      id: ids.controlId,
      'aria-invalid': fieldState.invalid,
      'aria-describedby': toDescribedBy(ids, {
        hasDescription: Boolean(description),
        hasError: fieldState.invalid,
      }),
    },
  };
};
