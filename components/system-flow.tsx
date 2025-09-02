import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export function SystemFlow() {
  const steps = [
    { title: "Tourist PWA", subtitle: "GPS & Reporting", tone: "emerald" },
    { title: "Backend APIs", subtitle: "Cloud Run", tone: "indigo" },
    { title: "Database", subtitle: "Cloud SQL & Firestore", tone: "sky" },
    { title: "Authority Dashboard", subtitle: "Live Maps & Logs", tone: "blue" },
  ] as const

  return (
    <div className="mx-auto max-w-4xl">
      <h3 className="mb-6 text-center text-2xl font-semibold">System Flow</h3>
      <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
        {steps.map((s, idx) => (
          <div key={s.title} className="flex items-center gap-3">
            <FlowBox tone={s.tone} title={s.title} subtitle={s.subtitle} />
            {idx !== steps.length - 1 && (
              <ChevronRight className="hidden h-6 w-6 text-muted-foreground md:block" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function FlowBox({
  tone,
  title,
  subtitle,
}: {
  tone: "emerald" | "indigo" | "sky" | "blue"
  title: string
  subtitle: string
}) {
  const toneClasses: Record<string, string> = {
    emerald: "bg-emerald-50 text-emerald-800 ring-emerald-200",
    indigo: "bg-indigo-50 text-indigo-800 ring-indigo-200",
    sky: "bg-sky-50 text-sky-800 ring-sky-200",
    blue: "bg-blue-50 text-blue-800 ring-blue-200",
  }
  return (
    <Card
      className={`w-56 cursor-default select-none rounded-lg px-4 py-3 text-center ring-1 transition-all hover:-translate-y-0.5 hover:shadow-sm ${toneClasses[tone]}`}
    >
      <div className="font-semibold">{title}</div>
      <div className="text-sm opacity-80">{subtitle}</div>
    </Card>
  )
}
