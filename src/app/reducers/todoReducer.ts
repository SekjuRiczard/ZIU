import { Todo, TodoAction } from '../types/todo';

// Reducer zgodny z Lab 4 - obsługa akcji ADD, TOGGLE, DELETE, EDIT
export function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case 'ADD': {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        completed: false,
        createdAt: new Date(),
        description: action.payload.description,
        priority: action.payload.priority,
        dueDate: action.payload.dueDate,
        category: action.payload.category,
      };
      return [newTodo, ...state];
    }

    case 'TOGGLE': {
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }

    case 'DELETE': {
      return state.filter(todo => todo.id !== action.payload);
    }

    case 'EDIT': {
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, ...action.payload.updates }
          : todo
      );
    }

    default:
      return state;
  }
}
