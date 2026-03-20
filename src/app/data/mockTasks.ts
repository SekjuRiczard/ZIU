import { Task } from '../components/library/TaskCard';

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Przygotować prezentację projektu',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    priority: 'high',
    dueDate: '2026-03-25',
    status: 'default'
  },
  {
    id: '2',
    title: 'Przejrzeć dokumentację API',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    priority: 'medium',
    dueDate: '2026-03-22',
    status: 'completed'
  },
  {
    id: '3',
    title: 'Naprawić błędy w kodzie',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    priority: 'high',
    dueDate: '2026-03-18',
    status: 'overdue'
  },
  {
    id: '4',
    title: 'Zaplanować spotkanie zespołowe',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    priority: 'low',
    dueDate: '2026-03-28',
    status: 'default'
  },
  {
    id: '5',
    title: 'Zaktualizować zależności projektu',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    priority: 'medium',
    dueDate: '2026-03-24',
    status: 'default'
  },
  {
    id: '6',
    title: 'Napisać testy jednostkowe',
    description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    priority: 'high',
    dueDate: '2026-03-15',
    status: 'overdue'
  }
];
