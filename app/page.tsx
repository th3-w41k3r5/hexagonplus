"use client"

import HeaderNav from "@/components/header-nav"
import { Hero } from "@/components/hero"
import { Section } from "@/components/section"
import { FeatureLists } from "@/components/feature-lists"
import { SystemFlow } from "@/components/system-flow"
import { TechGrid } from "@/components/tech-grid"
import { ImpactGrid } from "@/components/impact-grid"
import { Feasibility } from "@/components/feasibility"

export default function Page() {
  return (
    <div className="bg-background text-foreground font-sans">
      <HeaderNav />
      <main>
        <Hero />
        <Section
          id="problem"
          title="The Problem We're Solving"
          subtitle="Tourists face significant safety risks, and authorities lack the tools for a coordinated, real-time response."
        >
          <div className="mx-auto max-w-3xl rounded-xl border bg-card p-6 md:p-8 shadow-sm">
            <p className="text-muted-foreground leading-relaxed">
              Tourists frequently face safety issues such as getting lost in unfamiliar locations, road accidents,
              harassment, scams, or delayed help during medical emergencies. Existing systems lack real-time monitoring,
              geo-fencing alerts, structured incident reporting, and coordinated authority response. As a result, both
              tourists and authorities are left without a reliable safety net, reducing confidence in tourism
              infrastructure and impacting local economies.
            </p>
          </div>
        </Section>

        <Section
          id="solution"
          title="Our Proposed Solution: WanderSafe"
          subtitle="A dual-platform system: a PWA for tourists and a powerful dashboard for authorities."
        >
          <FeatureLists />
        </Section>

        <Section
          id="tech"
          title="Technology & System Flow"
          subtitle="Built on a scalable, modern, and reliable cloud-native stack."
        >
          <div className="space-y-10">
            <SystemFlow />
            <TechGrid />
          </div>
        </Section>

        <Section
          id="impact"
          title="Impact & Benefits"
          subtitle="A safer experience for tourists translates to a stronger economy and society."
        >
          <ImpactGrid />
        </Section>

        <Section
          id="feasibility"
          title="Feasibility & Risk Mitigation"
          subtitle="Our plan is achievable, with clear strategies to address potential challenges."
        >
          <Feasibility />
        </Section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 md:px-6 py-8 text-center text-sm text-muted-foreground">
          © 2025 WanderSafe Team. SIH2025 Idea Proposal.
        </div>
      </footer>
    </div>
  )
}
