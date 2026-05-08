import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ModalDialog } from "../../../components/accessibility/ModalDialog";
import { registerUser } from "../api/registerUser";
import {
  step3Schema,
  type RegistrationPayload,
  type Step1Data,
  type Step2Data,
  type Step3Data,
} from "../schemas/registrationSchemas";

type SummaryProps = {
  data: {
    step1: Step1Data;
    step2: Step2Data;
  };
  onBack: () => void;
  onEmailConflict: (message: string) => void;
  onSuccess: () => void;
};

type ApiError = Error & {
  status?: number;
};

export const Summary = ({
  data,
  onBack,
  onEmailConflict,
  onSuccess,
}: SummaryProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalTriggerRef = useRef<HTMLButtonElement>(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      rodo: false,
    },
  });

  const onSubmit = async (step3Data: Step3Data) => {
    const payload: RegistrationPayload = {
      ...data.step1,
      categories: data.step2.categories.map((category) => category.value),
      notifications: data.step2.notifications,
      newsletter: data.step2.newsletter,
      rodo: step3Data.rodo,
    };

    try {
      await registerUser(payload);
      onSuccess();
    } catch (error) {
      const apiError = error as ApiError;

      if (apiError.status === 409) {
        onEmailConflict("Ten adres e-mail jest już zarejestrowany");
        return;
      }

      setError("root.serverError", {
        type: "server",
        message: "Błąd serwera, spróbuj ponownie później",
      });
    }
  };

  return (
    <>
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <article
          className="summary-box"
          aria-labelledby="personal-summary-title"
        >
          <h3 id="personal-summary-title">Dane osobowe</h3>

          <dl>
            <div>
              <dt>Imię</dt>
              <dd>{data.step1.firstName}</dd>
            </div>

            <div>
              <dt>Nazwisko</dt>
              <dd>{data.step1.lastName}</dd>
            </div>

            <div>
              <dt>E-mail</dt>
              <dd>{data.step1.email}</dd>
            </div>
          </dl>
        </article>

        <article
          className="summary-box"
          aria-labelledby="preferences-summary-title"
        >
          <h3 id="preferences-summary-title">Preferencje</h3>

          <dl>
            <div>
              <dt>Kategorie</dt>
              <dd>
                {data.step2.categories
                  .map((category) => category.value)
                  .join(", ")}
              </dd>
            </div>

            <div>
              <dt>Powiadomienia e-mail</dt>
              <dd>{data.step2.notifications.email ? "Tak" : "Nie"}</dd>
            </div>

            <div>
              <dt>Powiadomienia push</dt>
              <dd>{data.step2.notifications.push ? "Tak" : "Nie"}</dd>
            </div>

            <div>
              <dt>Newsletter</dt>
              <dd>{data.step2.newsletter ? "Tak" : "Nie"}</dd>
            </div>
          </dl>
        </article>

        <section
          className="summary-box"
          aria-labelledby="privacy-information-title"
        >
          <h3 id="privacy-information-title">Informacje o prywatności</h3>

          <p>
            Przed wysłaniem formularza możesz sprawdzić informacje dotyczące
            przetwarzania danych osobowych.
          </p>

          <button
            type="button"
            className="button-secondary"
            ref={modalTriggerRef}
            onClick={() => setIsModalOpen(true)}
          >
            Pokaż informacje RODO
          </button>
        </section>

        <div className="form-field">
          <label className="checkbox-field" htmlFor="rodo">
            <input
              id="rodo"
              type="checkbox"
              aria-required="true"
              aria-invalid={!!errors.rodo}
              aria-describedby={errors.rodo ? "rodo-error" : undefined}
              {...register("rodo")}
            />
            Akceptuję zgodę RODO *
          </label>

          {errors.rodo && (
            <span id="rodo-error" className="field-error" role="alert">
              {errors.rodo.message}
            </span>
          )}
        </div>

        {errors.root?.serverError && (
          <p className="field-error" role="alert">
            {errors.root.serverError.message}
          </p>
        )}

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
            {isSubmitting ? "Wysyłanie…" : "Zarejestruj się"}
          </button>
        </div>
      </form>

      <ModalDialog
        isOpen={isModalOpen}
        title="Informacje o przetwarzaniu danych"
        onClose={() => setIsModalOpen(false)}
        triggerRef={modalTriggerRef}
      >
        <p>
          Dane podane w formularzu są wykorzystywane wyłącznie w celu
          przeprowadzenia procesu rejestracji.
        </p>

        <p>
          Zgoda RODO jest wymagana do wysłania formularza. Możesz zamknąć to
          okno klawiszem Escape albo przyciskiem „Zamknij”.
        </p>
      </ModalDialog>
    </>
  );
};
