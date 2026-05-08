import type { RegistrationPayload } from "../schemas/registrationSchemas";

type ApiError = Error & {
  status?: number;
};

const createApiError = (message: string, status: number): ApiError => {
  const error = new Error(message) as ApiError;
  error.status = status;

  return error;
};

export const registerUser = async (
  data: RegistrationPayload,
): Promise<{ success: true }> => {
  await new Promise((resolve) => window.setTimeout(resolve, 700));

  if (data.email.toLowerCase() === "test@test.pl") {
    throw createApiError("Adres e-mail jest już zajęty", 409);
  }

  if (data.email.toLowerCase() === "server@test.pl") {
    throw createApiError("Błąd serwera", 500);
  }

  console.log("Wysłano dane rejestracji:", data);

  return { success: true };
};
