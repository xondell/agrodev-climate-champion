import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

export const APP_URL = "https://farm-connect-main-ochre.vercel.app/";
// Public project presentation supplied by the AgroDev team.
export const YOUTUBE_VIDEO_ID = "9TSfNQh1RN4";

const nav = [
  { to: "/", label: "Project" },
  { to: "/interview", label: "Interviews" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5">
          <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={closeMenu}>
            <img
              src="/agrodev-logo.png"
              alt="AgroDev"
              className="h-10 w-10 rounded-xl object-cover"
            />
            <span className="font-display text-lg font-bold tracking-tight">AgroDev</span>
          </Link>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg text-foreground hover:bg-secondary sm:hidden"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <nav className="hidden items-center gap-1 text-sm sm:flex" aria-label="Main navigation">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                className="rounded-full px-3 py-2 font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="ml-2 rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Open app
            </a>
          </nav>
        </div>

        {isMenuOpen && (
          <nav
            className="border-t border-border/60 bg-background px-4 py-3 sm:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto grid max-w-6xl gap-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                  className="rounded-lg px-3 py-3 font-medium text-muted-foreground"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-1 rounded-lg bg-primary px-3 py-3 font-semibold text-primary-foreground"
                onClick={closeMenu}
              >
                Open the AgroDev app
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/60 bg-secondary/50">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <p>
            AgroDev - a student team from Moldova for the Oxford Saïd Global Climate Tech Challenge.
          </p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary hover:underline"
          >
            Explore the app <span aria-hidden="true">→</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
