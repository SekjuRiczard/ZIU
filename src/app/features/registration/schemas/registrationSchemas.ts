import { z } from "zod";

export const step1Schema = z
  .object({
    firstName: z.string().trim().min(2, "Imię musi mieć co najmniej 2 znaki"),
    lastName: z
      .string()
      .trim()
      .min(2, "Nazwisko musi mieć co najmniej 2 znaki"),
    email: z.string().trim().email("Podaj poprawny adres e-mail"),
    password: z
      .string()
      .min(8, "Hasło musi mieć co najmniej 8 znaków")
      .regex(/[A-Z]/, "Hasło musi zawierać wielką literę")
      .regex(/[0-9]/, "Hasło musi zawierać cyfrę"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Hasła muszą być identyczne",
    path: ["confirmPassword"],
  });

export const categorySchema = z.object({
  value: z
    .string()
    .trim()
    .min(2, "Nazwa kategorii musi mieć co najmniej 2 znaki"),
});

export const step2Schema = z.object({
  categories: z
    .array(categorySchema)
    .min(1, "Wybierz co najmniej jedną kategorię"),
  notifications: z.object({
    email: z.boolean(),
    push: z.boolean(),
  }),
  newsletter: z.boolean().optional(),
});

export const step3Schema = z.object({
  rodo: z
    .boolean()
    .refine((value) => value === true, "Musisz zaakceptować zgodę RODO"),
});

export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step3Data = z.infer<typeof step3Schema>;

export type RegistrationPayload = Step1Data & {
  categories: string[];
  notifications: Step2Data["notifications"];
  newsletter?: boolean;
  rodo: true;
};
