"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Download, Github, Menu, X } from "lucide-react";

import { navItems, profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.3, 0.6]
      }
    );

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = (
    <>
      {navItems.map((item) => {
        const id = item.href.replace("#", "");

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            aria-current={active === id ? "page" : undefined}
            className={cn(
              "rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/8 hover:text-white",
              active === id &&
                "bg-cyan-300/12 text-cyan-100 ring-1 ring-cyan-300/20"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/55 px-3 py-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <Link
          href="#home"
          className="flex items-center gap-3 rounded-full pr-2"
        >
          <span className="grid size-9 place-items-center rounded-full bg-blue-cyan text-sm font-black text-slate-950">
            SR
          </span>

          <span className="hidden text-sm font-semibold text-white sm:inline">
            {profile.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild size="sm" variant="ghost">
            <Link href={profile.github} target="_blank">
              <Github className="size-4" />
              GitHub
            </Link>
          </Button>

          <Button asChild size="sm" variant="outline">
            <Link href="/resume">
              <Download className="size-4" />
              Resume
            </Link>
          </Button>
        </div>

        <Button
          type="button"
          size="icon"
          variant="outline"
          className="lg:hidden"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </Button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 grid max-w-6xl gap-2 rounded-lg border border-white/10 bg-slate-950/85 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
          {navLinks}

          <div className="mt-2">
            <Button asChild className="w-full" size="sm" variant="outline">
              <Link href="/resume">
                <Download className="size-4" />
                Resume
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}