import { useState } from "react";
import { useNavigate } from "react-router";
import { Home, ListChecks, Settings } from "lucide-react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen((previousState) => !previousState);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="nav" aria-label="Główna nawigacja">
      <button
        type="button"
        className="nav__logo"
        onClick={() => handleNavigate("/")}
      >
        TodoApp
      </button>

      <button
        type="button"
        className="nav__hamburger"
        onClick={handleToggle}
        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
      >
        <span className="nav__hamburger-bar" />
        <span className="nav__hamburger-bar" />
        <span className="nav__hamburger-bar" />
      </button>

      <ul
        id="main-navigation"
        className={`nav__menu ${isOpen ? "nav__menu--open" : ""}`}
      >
        <li className="nav__item">
          <button
            type="button"
            className="nav__link"
            onClick={() => handleNavigate("/")}
          >
            <Home className="nav__icon" aria-hidden="true" />
            <span>Zadania</span>
          </button>
        </li>

        <li className="nav__item">
          <button
            type="button"
            className="nav__link"
            onClick={() => handleNavigate("/filter")}
          >
            <ListChecks className="nav__icon" aria-hidden="true" />
            <span>Kategorie</span>
          </button>
        </li>

        <li className="nav__item">
          <button
            type="button"
            className="nav__link"
            onClick={() => handleNavigate("/settings")}
          >
            <Settings className="nav__icon" aria-hidden="true" />
            <span>Profil</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
