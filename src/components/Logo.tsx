import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary shadow-glow">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-primary-foreground" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      <span>Video Speed Reader</span>
    </Link>
  );
}
