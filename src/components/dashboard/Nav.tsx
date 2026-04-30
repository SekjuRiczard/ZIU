import { useState } from "react";
import { useNavigate } from "react-router";
import { Home, LayoutDashboard, Settings, ListChecks } from "lucide-react";

export const Nav = () => {
  console.log("Nav component rendered");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav__logo" onClick={() => handleNavigate("/")}>
        TodoApp
      </div>
      <button
        className="nav__hamburger"
        onClick={handleToggle}
        aria-label="Menu"
      >
        <span className="nav__hamburger-bar"></span>
        <span className="nav__hamburger-bar"></span>
        <span className="nav__hamburger-bar"></span>
      </button>
      <ul className={`nav__menu ${isOpen ? "nav__menu--open" : ""}`}>
        <li className="nav__item">
          <button className="nav__link" onClick={() => handleNavigate("/")}>
            <Home className="nav__icon" />
            Zadania
          </button>
        </li>
        <li className="nav__item">
          <button
            className="nav__link"
            onClick={() => handleNavigate("/filter")}
          >
            <ListChecks className="nav__icon" />
            Kategorie
          </button>
        </li>
        <li className="nav__item">
          <button
            className="nav__link"
            onClick={() => handleNavigate("/settings")}
          >
            <Settings className="nav__icon" />
            Profil
          </button>
        </li>
      </ul>
    </nav>
  );
};
