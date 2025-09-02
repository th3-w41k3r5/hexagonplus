import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Feasibility() {
  return (
    <div className="mx-auto grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Feasibility</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Uses existing mobile browser capabilities (GPS, push notifications).</li>
            <li>Cloud-native stack ensures cost-effectiveness and easy scaling.</li>
            <li>MVP is deployable within the SIH timeline.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Challenges & Mitigations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <div>
            <div className="font-medium text-foreground">Risk: Data privacy & security.</div>
            <p>Mitigation: Strong encryption & government-compliant data storage.</p>
          </div>
          <div>
            <div className="font-medium text-foreground">Risk: Network issues in remote areas.</div>
            <p>Mitigation: Offline caching and a lightweight PWA design.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
