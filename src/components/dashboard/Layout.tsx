import { Outlet } from "react-router";
import { Nav } from "./Nav";

export const Layout = () => {
  return (
    <>
      <header className="app-header">
        <a href="#main-content" className="skip-link">
          Przejdź do treści głównej
        </a>

        <Nav />
      </header>

      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
    </>
  );
};
