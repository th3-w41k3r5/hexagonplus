import { Card, CardContent } from "@/components/ui/card"
import { MonitorSmartphone, Cpu, Database, Radio, Bell, HardDrive, KeyRound, Bot } from "lucide-react"

export function TechGrid() {
  const items = [
    { icon: MonitorSmartphone, title: "Frontend", sub: "React / Next.js" },
    { icon: Cpu, title: "Backend", sub: "Node.js / Express" },
    { icon: Database, title: "Database", sub: "Cloud SQL (PostGIS)" },
    { icon: Radio, title: "Realtime", sub: "Firestore" },
    { icon: Bell, title: "Notifications", sub: "FCM" },
    { icon: HardDrive, title: "Storage", sub: "Cloud Storage" },
    { icon: KeyRound, title: "Authentication", sub: "Firebase Auth" },
    { icon: Bot, title: "Optional AI", sub: "Vertex AI" },
  ] as const

  return (
    <div>
      <h3 className="mb-6 text-center text-2xl font-semibold">Technical Stack</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, sub }) => (
          <Card key={title} className="transition-transform hover:-translate-y-0.5">
            <CardContent className="flex flex-col items-center gap-2 py-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                <Icon className="h-5 w-5 text-foreground" aria-hidden="true" />
              </div>
              <div className="text-sm font-medium">{title}</div>
              <div className="text-xs text-muted-foreground">{sub}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
