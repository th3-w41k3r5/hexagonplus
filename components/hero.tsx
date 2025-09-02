"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="border-b bg-card">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
        <div className="mx-auto mb-4 flex justify-center">
          <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary">
            Safer Tourism, Smarter Response
          </Badge>
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">Travel with Confidence.</h1>
        <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg text-muted-foreground md:text-xl">
          WanderSafe is a comprehensive safety net for tourists and a real-time monitoring platform for authorities,
          proposed for SIH2025.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild variant="default">
            <a href="#problem">Explore the Proposal</a>
          </Button>
          <Button asChild variant="secondary">
            <a href="#solution">See the Solution</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
