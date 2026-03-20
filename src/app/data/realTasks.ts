import { TaskHiFi } from '../components/library/TaskCardHiFi';

export const realTasks: TaskHiFi[] = [
  {
    id: '1',
    title: 'Przygotować prezentację projektu',
    description: 'Stworzyć slajdy zawierające wyniki badań, analizę konkurencji oraz roadmap produktu na Q2 2026.',
    priority: 'high',
    dueDate: '25 marca 2026',
    status: 'active',
    category: 'Projekt',
    hasImage: true,
    imageUrl: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    title: 'Code review dla modułu autoryzacji',
    description: 'Sprawdzić implementację JWT, walidacji tokenów oraz obsługi sesji użytkowników.',
    priority: 'high',
    dueDate: '22 marca 2026',
    status: 'active',
    category: 'Development',
    hasImage: true,
    imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    title: 'Aktualizacja dokumentacji API',
    description: 'Zaktualizować dokumentację Swagger o nowe endpointy i przykłady wywołań.',
    priority: 'medium',
    dueDate: '24 marca 2026',
    status: 'completed',
    category: 'Dokumentacja',
    hasImage: false
  },
  {
    id: '4',
    title: 'Spotkanie z klientem - feedback',
    description: 'Omówić wyniki testów użyteczności oraz zebrać sugestie dotyczące nowych funkcjonalności.',
    priority: 'medium',
    dueDate: '28 marca 2026',
    status: 'active',
    category: 'Spotkania',
    hasImage: true,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
  },
  {
    id: '5',
    title: 'Optymalizacja wydajności bazy danych',
    description: 'Przeanalizować slow queries, dodać indeksy oraz zoptymalizować złożone zapytania.',
    priority: 'high',
    dueDate: '18 marca 2026',
    status: 'overdue',
    category: 'Backend',
    hasImage: true,
    imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop'
  },
  {
    id: '6',
    title: 'Refaktoryzacja komponentów UI',
    description: 'Wydzielić współdzielone komponenty, zastosować atomic design i poprawić accessibility.',
    priority: 'low',
    dueDate: '30 marca 2026',
    status: 'active',
    category: 'Frontend',
    hasImage: true,
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop'
  },
  {
    id: '7',
    title: 'Wdrożenie automatycznych testów E2E',
    description: 'Skonfigurować Playwright i napisać testy dla krytycznych ścieżek użytkownika.',
    priority: 'medium',
    dueDate: '26 marca 2026',
    status: 'active',
    category: 'Testing',
    hasImage: false
  },
  {
    id: '8',
    title: 'Analiza wyników kampanii marketingowej',
    description: 'Przygotować raport z metryk: CTR, konwersje, ROI oraz rekomendacje na przyszłość.',
    priority: 'low',
    dueDate: '21 marca 2026',
    status: 'completed',
    category: 'Marketing',
    hasImage: true,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
  },
  {
    id: '9',
    title: 'Setup środowiska CI/CD',
    description: 'Skonfigurować GitHub Actions dla automatycznego budowania, testowania i deploymentu.',
    priority: 'high',
    dueDate: '16 marca 2026',
    status: 'overdue',
    category: 'DevOps',
    hasImage: true,
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=300&fit=crop'
  }
];
