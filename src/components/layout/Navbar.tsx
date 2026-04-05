"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  );
}

export function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme");
    setIsDark(theme === "dark");
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleTheme = useCallback(() => {
    const next = !isDark;
    setIsDark(next);
    const theme = next ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (_) { }
  }, [isDark]);

  return (
    <>
      <header
        role="banner"
        className={`nav-header${scrolled ? " nav-header--scrolled" : ""}`}
      >
        <Container>
          <nav role="navigation" aria-label="Main navigation" className="nav-inner">
            <Link href="/" className="nav-logo" aria-label="Karthik Shetty — Home">
              Karthik Shetty
            </Link>

            <div className="nav-right">
              <ul className="nav-links" role="list">
                {NAV_LINKS.map(({ label, href }) => {
                  const isActive = pathname === href;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`nav-link${isActive ? " nav-link--active" : ""}`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="nav-controls">
                <button
                  onClick={toggleTheme}
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                  className="nav-theme-toggle"
                >
                  {isDark ? <SunIcon /> : <MoonIcon />}
                </button>

                <button
                  onClick={() => setMenuOpen((o) => !o)}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                  aria-controls="mobile-menu"
                  className="hamburger"
                >
                  <span
                    className="hamburger-line"
                    style={{
                      transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
                    }}
                  />
                  <span
                    className="hamburger-line"
                    style={{ opacity: menuOpen ? 0 : 1 }}
                  />
                  <span
                    className="hamburger-line"
                    style={{
                      transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
                    }}
                  />
                </button>
              </div>
            </div>
          </nav>
        </Container>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}
      >
        <div className="mobile-menu-spacer" aria-hidden="true" />
        <nav className="mobile-menu-nav">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`mobile-menu-link${isActive ? " mobile-menu-link--active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
