import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "../components/library/Input";
import { Button } from "../components/library/Button";

export function Settings() {
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    firstName: "Jan",
    lastName: "Kowalski",
    email: "jan.kowalski@example.com",
    phone: "+48 123 456 789",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [darkMode, setDarkMode] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Zapisano profil:", profileData);
    setStatusMessage("Profil został zaktualizowany.");
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setStatusMessage("Hasła nie są identyczne.");
      return;
    }

    console.log("Zmieniono hasło");
    setStatusMessage("Hasło zostało zmienione.");
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleDeleteAccount = () => {
    if (
      confirm(
        "Czy na pewno chcesz usunąć konto? Ta operacja jest nieodwracalna.",
      )
    ) {
      setStatusMessage("Funkcja usuwania konta jest dostępna w wersji demo.");
    }
  };

  return (
    <main
      id="main-content"
      className="min-h-screen bg-[#FAFAFA]"
      aria-labelledby="settings-title"
      tabIndex={-1}
    >
      <header className="bg-white border-b border-[#E0E0E0]">
        <section className="max-w-[1440px] mx-auto px-[80px] py-[24px]">
          <h1 id="settings-title" className="text-[#333333]">
            Ustawienia Profilu
          </h1>
        </section>
      </header>

      <section
        className="max-w-[1440px] mx-auto px-[80px] py-[40px]"
        aria-label="Panel ustawień profilu"
      >
        <nav
          className="mb-[32px] flex items-center gap-[8px] text-[#999999]"
          aria-label="Ścieżka nawigacji"
        >
          <button
            type="button"
            className="cursor-pointer hover:text-[#333333] bg-transparent border-0 p-0 text-[#999999]"
            onClick={() => navigate("/")}
          >
            Dashboard
          </button>

          <span aria-hidden="true">/</span>

          <span className="text-[#333333]" aria-current="page">
            Ustawienia
          </span>
        </nav>

        <p className="visually-hidden" role="status" aria-atomic="true">
          {statusMessage}
        </p>

        {statusMessage && (
          <p className="mb-[24px] text-[#333333]" role="status">
            {statusMessage}
          </p>
        )}

        <section className="max-w-[800px] space-y-[32px]">
          <article
            className="bg-white border border-[#E0E0E0] p-[40px]"
            aria-labelledby="profile-data-title"
          >
            <h2 id="profile-data-title" className="mb-[24px] text-[#333333]">
              Dane osobowe
            </h2>

            <form
              onSubmit={handleSaveProfile}
              aria-describedby="profile-data-description"
            >
              <p id="profile-data-description" className="visually-hidden">
                Formularz umożliwia zmianę imienia, nazwiska, adresu e-mail oraz
                numeru telefonu.
              </p>

              <fieldset className="border-0 p-0 m-0">
                <legend className="visually-hidden">Dane profilu</legend>

                <section className="grid grid-cols-2 gap-[24px] mb-[24px]">
                  <Input
                    label="Imię"
                    value={profileData.firstName}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        firstName: e.target.value,
                      })
                    }
                  />

                  <Input
                    label="Nazwisko"
                    value={profileData.lastName}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        lastName: e.target.value,
                      })
                    }
                  />
                </section>

                <section className="mb-[24px]">
                  <Input
                    label="Email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        email: e.target.value,
                      })
                    }
                  />
                </section>

                <section className="mb-[32px]">
                  <Input
                    label="Telefon"
                    value={profileData.phone}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        phone: e.target.value,
                      })
                    }
                  />
                </section>
              </fieldset>

              <footer className="flex justify-end">
                <Button type="submit" variant="primary">
                  Zapisz zmiany
                </Button>
              </footer>
            </form>
          </article>

          <article
            className="bg-white border border-[#E0E0E0] p-[40px]"
            aria-labelledby="password-change-title"
          >
            <h2 id="password-change-title" className="mb-[24px] text-[#333333]">
              Zmiana hasła
            </h2>

            <form
              onSubmit={handleChangePassword}
              aria-describedby="password-change-description"
            >
              <p id="password-change-description" className="visually-hidden">
                Formularz umożliwia zmianę hasła po podaniu obecnego hasła oraz
                potwierdzeniu nowego hasła.
              </p>

              <fieldset className="border-0 p-0 m-0">
                <legend className="visually-hidden">Dane zmiany hasła</legend>

                <section className="mb-[24px]">
                  <Input
                    label="Obecne hasło"
                    type="password"
                    placeholder="••••••••"
                    value={passwordData.currentPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        currentPassword: e.target.value,
                      })
                    }
                  />
                </section>

                <section className="mb-[24px]">
                  <Input
                    label="Nowe hasło"
                    type="password"
                    placeholder="••••••••"
                    value={passwordData.newPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        newPassword: e.target.value,
                      })
                    }
                  />
                </section>

                <section className="mb-[32px]">
                  <Input
                    label="Potwierdź nowe hasło"
                    type="password"
                    placeholder="••••••••"
                    value={passwordData.confirmPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </section>
              </fieldset>

              <footer className="flex justify-end">
                <Button type="submit" variant="primary">
                  Zmień hasło
                </Button>
              </footer>
            </form>
          </article>

          <article
            className="bg-white border border-[#E0E0E0] p-[40px]"
            aria-labelledby="appearance-title"
          >
            <h2 id="appearance-title" className="mb-[24px] text-[#333333]">
              Wygląd aplikacji
            </h2>

            <section className="flex items-center justify-between">
              <section aria-describedby="dark-mode-description">
                <h3 className="text-[#333333] mb-[4px]">Ciemny motyw</h3>
                <p
                  id="dark-mode-description"
                  className="text-[#999999] text-[14px]"
                >
                  Przełącz interfejs na ciemny tryb
                </p>
              </section>

              <label className="relative inline-block w-[56px] h-[32px] cursor-pointer">
                <span className="visually-hidden">
                  Włącz lub wyłącz ciemny motyw
                </span>
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={(e) => {
                    setDarkMode(e.target.checked);
                    setStatusMessage(
                      e.target.checked
                        ? "Ciemny motyw został włączony."
                        : "Ciemny motyw został wyłączony.",
                    );
                  }}
                  role="switch"
                  aria-checked={darkMode}
                  aria-describedby="dark-mode-description"
                  className="opacity-0 w-0 h-0"
                />
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 transition-all ${
                    darkMode ? "bg-[#666666]" : "bg-[#D0D0D0]"
                  }`}
                >
                  <span
                    className={`absolute top-[4px] left-[4px] w-[24px] h-[24px] bg-white transition-transform ${
                      darkMode ? "translate-x-[24px]" : ""
                    }`}
                  />
                </span>
              </label>
            </section>
          </article>

          <article
            className="bg-white border border-[#E0E0E0] p-[40px]"
            aria-labelledby="account-actions-title"
          >
            <h2 id="account-actions-title" className="mb-[24px] text-[#333333]">
              Zarządzanie kontem
            </h2>

            <section className="space-y-[16px]">
              <article className="flex items-center justify-between py-[16px] border-b border-[#E0E0E0]">
                <section>
                  <h3 className="text-[#333333] mb-[4px]">Eksportuj dane</h3>
                  <p className="text-[#999999] text-[14px]">
                    Pobierz kopię swoich danych
                  </p>
                </section>

                <Button
                  variant="secondary"
                  onClick={() =>
                    setStatusMessage(
                      "Eksport danych jest dostępny w wersji demo.",
                    )
                  }
                >
                  Eksportuj
                </Button>
              </article>

              <article className="flex items-center justify-between py-[16px]">
                <section>
                  <h3 className="text-[#333333] mb-[4px]">Usuń konto</h3>
                  <p className="text-[#999999] text-[14px]">
                    Trwale usuń konto i wszystkie dane
                  </p>
                </section>

                <Button variant="secondary" onClick={handleDeleteAccount}>
                  Usuń konto
                </Button>
              </article>
            </section>
          </article>
        </section>
      </section>
    </main>
  );
}
