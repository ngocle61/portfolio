import type { TFunction } from 'i18next';
import { z } from 'zod';

export const createUserFormSchema = (t: TFunction<typeof I18N_NAMESPACES.USER_MANAGEMENT>) =>
  z.object({
    email: z
      .string()
      .trim()
      .toLowerCase()
      .min(1, { error: t('form.validation.emailRequired') })
      .pipe(z.email({ error: t('form.validation.emailInvalid') })),
    fullName: z
      .string()
      .trim()
      .min(1, { error: t('form.validation.fullNameRequired') }),
    password: z.string().min(USER_FORM_LIMITS.PASSWORD_MIN, {
      error: t('form.validation.passwordMin', { min: USER_FORM_LIMITS.PASSWORD_MIN }),
    }),
    role: z.enum(ROLES, { error: t('form.validation.roleRequired') }),
  });
