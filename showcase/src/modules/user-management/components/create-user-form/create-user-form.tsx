import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export const CreateUserForm = ({ onCreated }: CreateUserFormProps) => {
  const { t } = useTranslation(I18N_NAMESPACES.USER_MANAGEMENT);
  const form = useForm<CreateUserFormValues>({
    resolver: zodResolver(createUserFormSchema(t)),
    defaultValues: CREATE_USER_DEFAULT_VALUES,
    ...SUBMIT_FIRST_VALIDATION,
  });
  const createUser = useCreateUser();

  const submit = (values: CreateUserFormValues) =>
    createUser.mutate(values, {
      onSuccess: onCreated,
      onError: (error) => applyServerFieldErrors(error, form.setError),
    });

  return (
    <Form form={form} onSubmit={submit}>
      <InputField name="email" type="email" label={t('form.emailLabel')} />
      <InputField name="fullName" label={t('form.fullNameLabel')} />
      <PasswordField name="password" label={t('form.passwordLabel')} />
      <SelectField name="role" label={t('form.roleLabel')} options={roleOptions} />
      <Button type="submit" disabled={createUser.isPending}>
        {t('form.create')}
      </Button>
    </Form>
  );
};
