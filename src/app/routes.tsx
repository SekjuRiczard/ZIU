import { createBrowserRouter } from "react-router";
import { Lab4Dashboard } from "./screens/Lab4Dashboard";
import { FilterSort } from "./screens/FilterSort";
import { TaskDetails } from "./screens/TaskDetails";
import { Lab4AddTask } from "./screens/Lab4AddTask";
import { SettingsHiFi } from "./screens/SettingsHiFi";
import { DesignSystem } from "./screens/DesignSystem";
import { Dashboard } from "./screens/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
  },
  {
    path: "/todos",
    Component: Lab4Dashboard,
  },
  {
    path: "/filter",
    Component: FilterSort,
  },
  {
    path: "/task/:id",
    Component: TaskDetails,
  },
  {
    path: "/add-task",
    Component: Lab4AddTask,
  },
  {
    path: "/settings",
    Component: SettingsHiFi,
  },
]);
