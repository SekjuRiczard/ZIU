import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { step1Schema, type Step1Data } from "../schemas/registrationSchemas";

type PersonalDataProps = {
  defaultValues?: Step1Data;
  serverEmailError?: string | null;
  onComplete: (data: Step1Data) => void;
};

type PasswordStrength = "słabe" | "średnie" | "silne";

const defaultStep1Values: Step1Data = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const getPasswordStrength = (password: string): PasswordStrength => {
  let score = 0;

  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  if (score <= 1) return "słabe";
  if (score <= 3) return "średnie";

  return "silne";
};

export const PersonalData = ({
  defaultValues,
  serverEmailError,
  onComplete,
}: PersonalDataProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: defaultValues ?? defaultStep1Values,
  });

  const passwordValue = watch("password");
  const passwordStrength = getPasswordStrength(passwordValue || "");

  useEffect(() => {
    if (!serverEmailError) return;

    setError("email", {
      type: "server",
      message: serverEmailError,
    });
  }, [serverEmailError, setError]);

  return (
    <section aria-labelledby="personal-data-title">
      <h3 id="personal-data-title" className="visually-hidden">
        Dane osobowe użytkownika
      </h3>

      <form
        className="registration-form"
        aria-describedby="personal-data-description"
        onSubmit={handleSubmit(onComplete)}
      >
        <p id="personal-data-description" className="field-hint">
          Wypełnij podstawowe dane osobowe wymagane do rejestracji konta.
        </p>

        <fieldset className="fieldset">
          <legend>Dane osobowe</legend>

          <p className="form-field">
            <label htmlFor="firstName">Imię *</label>
            <input
              id="firstName"
              type="text"
              autoComplete="given-name"
              aria-required="true"
              aria-invalid={!!errors.firstName}
              aria-describedby={
                errors.firstName ? "firstName-error" : undefined
              }
              {...register("firstName")}
            />
            {errors.firstName && (
              <span id="firstName-error" className="field-error" role="alert">
                {errors.firstName.message}
              </span>
            )}
          </p>

          <p className="form-field">
            <label htmlFor="lastName">Nazwisko *</label>
            <input
              id="lastName"
              type="text"
              autoComplete="family-name"
              aria-required="true"
              aria-invalid={!!errors.lastName}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
              {...register("lastName")}
            />
            {errors.lastName && (
              <span id="lastName-error" className="field-error" role="alert">
                {errors.lastName.message}
              </span>
            )}
          </p>

          <p className="form-field">
            <label htmlFor="email">E-mail *</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email && (
              <span id="email-error" className="field-error" role="alert">
                {errors.email.message}
              </span>
            )}
          </p>
        </fieldset>

        <fieldset className="fieldset">
          <legend>Dane logowania</legend>

          <p className="form-field">
            <label htmlFor="password">Hasło *</label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              aria-required="true"
              aria-invalid={!!errors.password}
              aria-describedby={
                errors.password ? "password-error" : "password-hint"
              }
              {...register("password")}
            />

            <span
              id="password-hint"
              className="password-strength"
              role="status"
              aria-live="polite"
            >
              Siła hasła: <strong>{passwordStrength}</strong>
            </span>

            {errors.password && (
              <span id="password-error" className="field-error" role="alert">
                {errors.password.message}
              </span>
            )}
          </p>

          <p className="form-field">
            <label htmlFor="confirmPassword">Powtórz hasło *</label>
            <input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              aria-required="true"
              aria-invalid={!!errors.confirmPassword}
              aria-describedby={
                errors.confirmPassword ? "confirmPassword-error" : undefined
              }
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <span
                id="confirmPassword-error"
                className="field-error"
                role="alert"
              >
                {errors.confirmPassword.message}
              </span>
            )}
          </p>
        </fieldset>

        <footer className="form-actions form-actions--end">
          <button
            type="submit"
            className="button-primary"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Sprawdzanie…" : "Dalej"}
          </button>
        </footer>
      </form>
    </section>
  );
};
