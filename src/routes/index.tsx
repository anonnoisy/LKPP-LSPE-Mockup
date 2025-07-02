import { SignInView } from "@/modules/auth/components/views/sign-in-view";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/")({
  validateSearch: z.object({
    redirect: z.string().optional().catch(""),
  }),
  beforeLoad: ({ context, search }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({ to: search.redirect || "/app" });
    }
  },
  component: Index,
});

function Index() {
  return <SignInView />;
}
