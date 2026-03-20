import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ThemeProvider } from './context/ThemeContext';
import { TodoProvider } from './context/TodoContext';

// Lab 4 - App.tsx z Context API (TodoProvider, ThemeProvider)
// Unika props drilling poprzez wykorzystanie Context

export default function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
    </ThemeProvider>
  );
}
