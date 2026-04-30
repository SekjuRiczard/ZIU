import React, { useState } from "react";
import { useNavigate } from "react-router";
import { TaskCard } from "../components/library/TaskCard";
import { Input } from "../components/library/Input";
import { Button } from "../components/library/Button";
import { mockTasks } from "../data/mockTasks";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import StatsGrid from "../../components/dashboard/StatsGrid";

export function Dashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTasks = mockTasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <DashboardLayout title="Lista Zadań">
      <div className="mb-[32px] flex flex-col gap-[16px] lg:flex-row">
        <div className="flex-1">
          <Input
            id="task-search"
            label="Szukaj zadań"
            placeholder="Szukaj zadań..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button
          variant="secondary"
          onClick={() => navigate("/filter")}
          className="w-full lg:w-auto"
        >
          <div className="flex items-center gap-[8px]">
            <div className="w-[16px] h-[16px] bg-[#666666]" />
            <span>Filtry i sortowanie</span>
          </div>
        </Button>
      </div>

      <div className="mb-[32px]">
        <StatsGrid />
      </div>
      <h2 className="sr-only">Lista zadań</h2>
      <div className="task-grid mb-[80px]">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onClick={() => navigate(`/task/${task.id}`)}
          />
        ))}
      </div>

      <div
        className="fixed bottom-[40px] right-[40px] w-[64px] h-[64px] bg-[#333333] text-white flex items-center justify-center cursor-pointer hover:bg-[#555555] transition-all shadow-lg"
        onClick={() => navigate("/add-task")}
      >
        <div className="text-[32px]">+</div>
      </div>
    </DashboardLayout>
  );
}
