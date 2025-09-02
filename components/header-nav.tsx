"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield, Map, Wrench, BarChart3, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "problem", label: "The Problem", icon: Shield },
  { id: "solution", label: "Our Solution", icon: CheckCircle2 },
  { id: "tech", label: "Technology", icon: Wrench },
  { id: "impact", label: "Impact", icon: BarChart3 },
  { id: "feasibility", label: "Feasibility", icon: Map },
]

export default function HeaderNav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>("")

  // IntersectionObserver for scrollspy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0.05, 0.2, 0.5] },
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const NavLinks = useMemo(
    () =>
      sections.map(({ id, label, icon: Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          className={cn(
            "group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
            active === id && "text-emerald-600",
          )}
          onClick={() => setOpen(false)}
        >
          <Icon className={cn("h-4 w-4", active === id && "text-emerald-600")} aria-hidden="true" />
          <span className="text-pretty">{label}</span>
          <span
            className={cn(
              "ml-1 h-1 w-1 rounded-full bg-transparent transition-colors",
              active === id && "bg-emerald-600",
            )}
            aria-hidden="true"
          />
        </a>
      )),
    [active],
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        <Link href="#" className="font-semibold tracking-tight text-foreground">
          WanderSafe
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {NavLinks}
          <Button asChild className="ml-2">
            <a href="#problem">Explore</a>
          </Button>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="md:hidden bg-transparent"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="border-t md:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-3">
            {NavLinks}
            <Button asChild className="mt-2 w-full">
              <a href="#problem" onClick={() => setOpen(false)}>
                Explore
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
