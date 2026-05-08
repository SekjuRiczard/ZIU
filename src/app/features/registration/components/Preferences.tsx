import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { step2Schema, type Step2Data } from "../schemas/registrationSchemas";

type PreferencesProps = {
  defaultValues?: Step2Data;
  onBack: () => void;
  onComplete: (data: Step2Data) => void;
};

const defaultStep2Values: Step2Data = {
  categories: [{ value: "React" }],
  notifications: {
    email: true,
    push: false,
  },
  newsletter: false,
};

export const Preferences = ({
  defaultValues,
  onBack,
  onComplete,
}: PreferencesProps) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: defaultValues ?? defaultStep2Values,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "categories",
  });

  return (
    <form className="registration-form" onSubmit={handleSubmit(onComplete)}>
      <fieldset className="fieldset">
        <legend>Kategorie zainteresowań *</legend>

        <p className="field-hint" id="categories-hint">
          Dodaj minimum jedną kategorię, np. React, TypeScript albo UI.
        </p>

        <div
          className="categories-list"
          aria-describedby={
            errors.categories ? "categories-error" : "categories-hint"
          }
        >
          {fields.map((field, index) => {
            const fieldError = errors.categories?.[index]?.value;

            return (
              <div className="category-row" key={field.id}>
                <div className="form-field form-field--grow">
                  <label htmlFor={`category-${field.id}`}>
                    Kategoria {index + 1} *
                  </label>
                  <input
                    id={`category-${field.id}`}
                    type="text"
                    aria-required="true"
                    aria-invalid={!!fieldError}
                    aria-describedby={
                      fieldError ? `category-${field.id}-error` : undefined
                    }
                    {...register(`categories.${index}.value`)}
                  />

                  {fieldError && (
                    <span
                      id={`category-${field.id}-error`}
                      className="field-error"
                      role="alert"
                    >
                      {fieldError.message}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  className="button-secondary"
                  onClick={() => remove(index)}
                  aria-label={`Usuń kategorię ${index + 1}`}
                >
                  Usuń
                </button>
              </div>
            );
          })}
        </div>

        {errors.categories?.message && (
          <span id="categories-error" className="field-error" role="alert">
            {errors.categories.message}
          </span>
        )}

        <button
          type="button"
          className="button-secondary"
          onClick={() => append({ value: "" })}
        >
          Dodaj kategorię
        </button>
      </fieldset>

      <fieldset className="fieldset">
        <legend>Powiadomienia</legend>

        <Controller
          name="notifications.email"
          control={control}
          render={({ field }) => (
            <label className="checkbox-field" htmlFor="notifications-email">
              <input
                id="notifications-email"
                type="checkbox"
                aria-label="Powiadomienia e-mail"
                checked={field.value}
                onChange={(event) => field.onChange(event.target.checked)}
                onBlur={field.onBlur}
                name={field.name}
                ref={field.ref}
              />
              Chcę otrzymywać powiadomienia e-mail
            </label>
          )}
        />

        <Controller
          name="notifications.push"
          control={control}
          render={({ field }) => (
            <label className="checkbox-field" htmlFor="notifications-push">
              <input
                id="notifications-push"
                type="checkbox"
                aria-label="Powiadomienia push"
                checked={field.value}
                onChange={(event) => field.onChange(event.target.checked)}
                onBlur={field.onBlur}
                name={field.name}
                ref={field.ref}
              />
              Chcę otrzymywać powiadomienia push
            </label>
          )}
        />

        <label className="checkbox-field" htmlFor="newsletter">
          <input id="newsletter" type="checkbox" {...register("newsletter")} />
          Zapisz mnie do newslettera
        </label>
      </fieldset>

      <div className="form-actions">
        <button type="button" className="button-secondary" onClick={onBack}>
          Wstecz
        </button>

        <button
          type="submit"
          className="button-primary"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Zapisywanie…" : "Dalej"}
        </button>
      </div>
    </form>
  );
};
