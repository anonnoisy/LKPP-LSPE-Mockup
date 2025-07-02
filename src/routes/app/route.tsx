import { DashboardView } from "@/modules/dashboard/views/dashboard-view";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: Index,
  notFoundComponent: () => {
    return <p>This page doesn't exist!</p>;
  },
});

function Index() {
  return (
    <DashboardView>
      <Outlet />
    </DashboardView>
  );
}
