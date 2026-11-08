import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/_authenticated/app")({
  head: () => ({
    meta: [
      { title: "Dashboard — Video Speed Reader" },
      { name: "description", content: "Your Video Speed Reader dashboard." },
      { property: "og:title", content: "Dashboard — Video Speed Reader" },
      { property: "og:description", content: "Your Video Speed Reader dashboard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AppPage,
});

function AppPage() {
  const { user } = Route.useRouteContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/signin", replace: true });
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <Button variant="outline" size="sm" onClick={signOut}>
            Sign out / 登出
          </Button>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-16 sm:px-6">
        <div className="animate-fade-up">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Hi <span className="text-gradient break-all">{user.email}</span>
          </h1>
          <div className="mt-8 rounded-xl border border-dashed border-border bg-card p-8 text-muted-foreground">
            Your dashboard is coming soon. Upload functionality will be added in the next milestone.
          </div>
        </div>
      </main>
    </div>
  );
}
