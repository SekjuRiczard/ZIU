import { createBrowserRouter } from 'react-router';
import { Lab4Dashboard } from './screens/Lab4Dashboard';
import { Lab4AddTask } from './screens/Lab4AddTask';
import { SettingsHiFi } from './screens/SettingsHiFi';
import { DesignSystem } from './screens/DesignSystem';
import { Lab4Docs } from './screens/Lab4Docs';

// Lab 4 - Routing z funkcjonalnymi komponentami

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Lab4Dashboard,
  },
  {
    path: '/add-task',
    Component: Lab4AddTask,
  },
  {
    path: '/settings',
    Component: SettingsHiFi,
  },
  {
    path: '/design-system',
    Component: DesignSystem,
  },
  {
    path: '/lab4-docs',
    Component: Lab4Docs,
  },
]);