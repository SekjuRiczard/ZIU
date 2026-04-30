import React from "react";
import { Nav } from "../../../components/dashboard/Nav";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}
