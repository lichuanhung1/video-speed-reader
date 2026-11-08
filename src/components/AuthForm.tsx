import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/Logo";

export function AuthForm({ mode }: { mode: "signin" | "signup" }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const isSignup = mode === "signup";

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { data, error } = isSignup
      ? await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin + "/app" },
        })
      : await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    if (!data.session) {
      toast.success("Check your email to confirm your account.");
      return;
    }
    navigate({ to: "/app" });
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="animate-fade-up relative w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-glow">
          <h1 className="text-xl font-semibold">{isSignup ? "Create account / 註冊" : "Sign in / 登入"}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {isSignup ? "Start turning videos into transcripts." : "Welcome back."}
          </p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                minLength={6}
                autoComplete={isSignup ? "new-password" : "current-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" variant="hero" className="w-full" disabled={loading}>
              {loading ? "Please wait…" : isSignup ? "Sign up" : "Sign in"}
            </Button>
          </form>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          {isSignup ? (
            <>
              Already have an account? <Link to="/signin" className="text-primary-glow hover:underline">Sign in</Link>
            </>
          ) : (
            <>
              New here? <Link to="/signup" className="text-primary-glow hover:underline">Create an account</Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
