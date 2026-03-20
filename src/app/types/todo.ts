// Modele danych zgodne z Lab 4

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  description?: string;
  priority?: 'low' | 'medium' | 'high';
  dueDate?: string;
  category?: string;
}

export type FilterType = 'all' | 'active' | 'completed';

// Typy akcji dla reducer
export type TodoAction =
  | { type: 'ADD'; payload: Omit<Todo, 'id' | 'createdAt' | 'completed'> }
  | { type: 'TOGGLE'; payload: string }
  | { type: 'DELETE'; payload: string }
  | { type: 'EDIT'; payload: { id: string; updates: Partial<Todo> } };
