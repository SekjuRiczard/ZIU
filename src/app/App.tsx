import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider } from "./context/ThemeContext";
import { TodoProvider } from "./context/TodoContext";

export default function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
    </ThemeProvider>
  );
}
