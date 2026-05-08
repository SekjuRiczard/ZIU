import { useEffect, useRef, useState } from "react";

import { PersonalData } from "./PersonalData";
import { Preferences } from "./Preferences";
import { Summary } from "./Summary";
import type { Step1Data, Step2Data } from "../schemas/registrationSchemas";

type FormDataState = {
  step1?: Step1Data;
  step2?: Step2Data;
};

const stepTitles: Record<number, string> = {
  1: "Krok 1: Dane osobowe",
  2: "Krok 2: Preferencje",
  3: "Krok 3: Podsumowanie i potwierdzenie",
};

const steps = [
  { number: 1, label: "Dane" },
  { number: 2, label: "Preferencje" },
  { number: 3, label: "Podsumowanie" },
];

export const MultiStepRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormDataState>({});
  const [serverEmailError, setServerEmailError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState(
    "Wyświetlono krok 1 z 3: Dane osobowe",
  );

  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();

    setStatusMessage(
      currentStep === 1
        ? "Wyświetlono krok 1 z 3: Dane osobowe"
        : currentStep === 2
          ? "Wyświetlono krok 2 z 3: Preferencje"
          : "Wyświetlono krok 3 z 3: Podsumowanie i potwierdzenie",
    );
  }, [currentStep]);

  const handleStep1Complete = (data: Step1Data) => {
    setServerEmailError(null);
    setSuccessMessage(null);

    setFormData((previousData) => ({
      ...previousData,
      step1: data,
    }));

    setCurrentStep(2);
  };

  const handleStep2Complete = (data: Step2Data) => {
    setSuccessMessage(null);

    setFormData((previousData) => ({
      ...previousData,
      step2: data,
    }));

    setCurrentStep(3);
  };

  const handleBackToStep1WithEmailError = (message: string) => {
    setServerEmailError(message);
    setStatusMessage("Adres e-mail jest już zajęty. Wrócono do kroku 1.");
    setCurrentStep(1);
  };

  const handleSuccess = () => {
    const message = "Rejestracja zakończona powodzeniem.";

    setSuccessMessage(message);
    setStatusMessage(message);
  };

  return (
    <main
      id="main-content"
      className="registration-page"
      aria-labelledby="registration-title"
      tabIndex={-1}
    >
      <section className="registration-card" aria-label="Formularz rejestracji">
        <nav className="registration-steps" aria-label="Postęp rejestracji">
          <ol>
            {steps.map((step) => (
              <li key={step.number}>
                <span
                  className={
                    currentStep === step.number
                      ? "registration-step registration-step--active"
                      : "registration-step"
                  }
                  aria-current={
                    currentStep === step.number ? "step" : undefined
                  }
                >
                  {step.number}. {step.label}
                </span>
              </li>
            ))}
          </ol>
        </nav>

        <h2 id="registration-title" ref={headingRef} tabIndex={-1}>
          {stepTitles[currentStep]}
        </h2>

        <p className="required-hint">
          Pola oznaczone gwiazdką (*) są wymagane.
        </p>

        <p className="visually-hidden" role="status" aria-atomic="true">
          {statusMessage}
        </p>

        {successMessage && (
          <p className="success-message" role="status">
            {successMessage}
          </p>
        )}

        {currentStep === 1 && (
          <PersonalData
            defaultValues={formData.step1}
            serverEmailError={serverEmailError}
            onComplete={handleStep1Complete}
          />
        )}

        {currentStep === 2 && (
          <Preferences
            defaultValues={formData.step2}
            onBack={() => setCurrentStep(1)}
            onComplete={handleStep2Complete}
          />
        )}

        {currentStep === 3 && formData.step1 && formData.step2 && (
          <Summary
            data={{
              step1: formData.step1,
              step2: formData.step2,
            }}
            onBack={() => setCurrentStep(2)}
            onEmailConflict={handleBackToStep1WithEmailError}
            onSuccess={handleSuccess}
          />
        )}
      </section>
    </main>
  );
};
