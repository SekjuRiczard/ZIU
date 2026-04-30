import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import StatsCard from "./StatsCard";
import { useTodos } from "../../app/context/TodoContext";

export default function StatsGrid() {
  const { todos } = useTodos();

  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const pending = total - completed;

  return (
    <section aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">
        Statystyki zadań
      </h2>

      <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-3">
        <StatsCard
          title="Wszystkie"
          value={total}
          icon={FormatListBulletedIcon}
          color="#1565c0"
          bgColor="#e3f2fd"
        />

        <StatsCard
          title="Ukończone"
          value={completed}
          icon={CheckCircleIcon}
          color="#2e7d32"
          bgColor="#e8f5e9"
        />

        <StatsCard
          title="Oczekujące"
          value={pending}
          icon={RadioButtonUncheckedIcon}
          color="#e65100"
          bgColor="#fff3e0"
        />
      </div>
    </section>
  );
}
