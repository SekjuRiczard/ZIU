import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider } from "./context/ThemeContext";
import { TodoProvider } from "./context/TodoContext";

export default function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <a href="#main-content" className="skip-link">
          Przejdź do treści głównej
        </a>

        <RouterProvider router={router} />
      </TodoProvider>
    </ThemeProvider>
  );
}
