import React, { createContext, useContext, useReducer, useMemo } from 'react';
import { Todo, TodoAction, FilterType } from '../types/todo';
import { todoReducer } from '../reducers/todoReducer';

// Context API zgodnie z Lab 4 - unikanie props drilling

interface TodoContextType {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  filteredTodos: Todo[];
  activeTodosCount: number;
  completedTodosCount: number;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Początkowe dane (przykładowe zadania dla demonstracji)
const initialTodos: Todo[] = [
  {
    id: crypto.randomUUID(),
    title: 'Przygotować prezentację projektu',
    description: 'Stworzyć slajdy zawierające wyniki badań, analizę konkurencji oraz roadmap produktu.',
    completed: false,
    createdAt: new Date('2026-03-15'),
    priority: 'high',
    dueDate: '2026-03-25',
    category: 'Projekt',
  },
  {
    id: crypto.randomUUID(),
    title: 'Code review dla modułu autoryzacji',
    description: 'Sprawdzić implementację JWT, walidacji tokenów oraz obsługi sesji użytkowników.',
    completed: false,
    createdAt: new Date('2026-03-16'),
    priority: 'high',
    dueDate: '2026-03-22',
    category: 'Development',
  },
  {
    id: crypto.randomUUID(),
    title: 'Aktualizacja dokumentacji API',
    description: 'Zaktualizować dokumentację Swagger o nowe endpointy.',
    completed: true,
    createdAt: new Date('2026-03-14'),
    priority: 'medium',
    dueDate: '2026-03-20',
    category: 'Dokumentacja',
  },
];

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [filter, setFilter] = React.useState<FilterType>('all');

  // Logika filtrowania z useMemo dla optymalizacji
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'all':
      default:
        return todos;
    }
  }, [todos, filter]);

  // Liczniki zadań (reaktywne)
  const activeTodosCount = useMemo(
    () => todos.filter(todo => !todo.completed).length,
    [todos]
  );

  const completedTodosCount = useMemo(
    () => todos.filter(todo => todo.completed).length,
    [todos]
  );

  const value = {
    todos,
    dispatch,
    filter,
    setFilter,
    filteredTodos,
    activeTodosCount,
    completedTodosCount,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within TodoProvider');
  }
  return context;
}