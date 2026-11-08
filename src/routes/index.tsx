import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Video Speed Reader — 上傳影片，三分鐘內拿到逐字稿" },
      {
        name: "description",
        content: "Upload your video, get a clean, accurate transcript in three minutes. Chinese and English supported.",
      },
      { property: "og:title", content: "Video Speed Reader — Transcripts in three minutes" },
      {
        property: "og:description",
        content: "Upload your video, get a clean, accurate transcript in three minutes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  {
    title: "高準確度逐字稿",
    en: "High-accuracy transcripts",
    body: "Powered by OpenAI Whisper. Supports Chinese and English.",
    icon: "M4 6h16M4 12h10M4 18h7",
  },
  {
    title: "三分鐘交付",
    en: "Three-minute turnaround",
    body: "Processed in the background — you get an email when it's ready.",
    icon: "M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
  },
  {
    title: "可商用授權",
    en: "Commercial-use ready",
    body: "You own the output. Use it however you like.",
    icon: "M9 12l2 2 4-4M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z",
  },
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-20 border-b border-border bg-background/70 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <Button asChild variant="hero" size="sm">
            <Link to="/signin">Sign in / 登入</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
          <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32">
            <p className="animate-fade-up mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              For creators, educators & engineers
            </p>
            <h1
              className="animate-fade-up text-5xl font-extrabold tracking-tight sm:text-7xl"
              style={{ animationDelay: "80ms" }}
            >
              <span className="text-gradient">Video Speed Reader</span>
            </h1>
            <p
              className="animate-fade-up mt-6 text-2xl font-semibold sm:text-3xl"
              style={{ animationDelay: "160ms" }}
            >
              上傳影片，三分鐘內拿到逐字稿。
            </p>
            <p
              className="animate-fade-up mx-auto mt-3 max-w-xl text-base text-muted-foreground sm:text-lg"
              style={{ animationDelay: "240ms" }}
            >
              Upload your video, get a clean transcript in three minutes.
            </p>
            <div
              className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
              style={{ animationDelay: "320ms" }}
            >
              <Button asChild variant="hero" size="lg">
                <Link to="/signup">Get started free</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/signin">Sign in / 登入</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.en} delay={i * 100}>
                <article className="h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                  <div className="mb-5 grid h-10 w-10 place-items-center rounded-lg bg-accent">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-none stroke-primary-glow"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d={f.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">
                    {f.title} <span className="text-muted-foreground">({f.en})</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-muted-foreground sm:px-6">
          © 2026 Video Speed Reader
        </div>
      </footer>
    </div>
  );
}
