import React from "react";
import { Nav } from "../../../components/dashboard/Nav";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--color-surface-background)]">
      <Nav />
      <main className="pt-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}
