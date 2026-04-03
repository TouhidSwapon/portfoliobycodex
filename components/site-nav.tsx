import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Thinking", href: "#thinking" },
  { label: "Now", href: "#now" },
  { label: "Contact", href: "#contact" }
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-[color:var(--surface)] backdrop-blur-xl dark:border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="font-mono text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
          Touhid Swapon
        </a>
        <nav className="hidden flex-1 items-center justify-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[color:var(--muted)] transition hover:text-[color:var(--text)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-white/30 bg-white/70 px-4 py-2 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100 md:inline-flex"
          >
            Let&apos;s Build
          </a>
          <ThemeToggle />
        </div>
      </div>
      <nav className="flex items-center justify-start gap-5 overflow-x-auto px-6 pb-3 text-sm md:hidden">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="whitespace-nowrap text-[color:var(--muted)]">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
