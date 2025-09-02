import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ImpactGrid() {
  const items = [
    { title: "For Tourists", desc: "A safer, more reliable travel experience with instant help in emergencies." },
    { title: "For Authorities", desc: "Real-time oversight, faster response times, and valuable data for prevention." },
    { title: "For Governments", desc: "Enhanced reputation of destinations and a more resilient tourism sector." },
    { title: "For the Economy", desc: "Increased tourism confidence leading to more visitors and revenue." },
    { title: "For Society", desc: "Reduced safety incidents and greater trust in public safety systems." },
  ] as const

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <Card key={it.title} className="bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{it.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{it.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
