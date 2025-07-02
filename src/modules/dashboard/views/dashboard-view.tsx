import type React from "react";
import { Sidebar } from "../components/sidebar";

export function DashboardView(props: { children: React.ReactNode }) {
  return (
    <div className="h-screen grid grid-cols-12">
      <div className="h-screen col-span-2 border-x">
        <Sidebar />
      </div>
      {props.children}
    </div>
  );
}
