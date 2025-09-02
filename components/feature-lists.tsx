import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BadgeCheck,
  MapPin,
  LifeBuoy,
  LocateFixed,
  FileText,
  WifiOff,
  Map,
  AlertTriangle,
  NotebookText,
  SquareDashedBottomCode,
  BarChart3,
} from "lucide-react"

export function FeatureLists() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-emerald-100">
        <CardHeader>
          <CardTitle className="text-center text-emerald-700">For Tourists (PWA)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FeatureItem
            icon={BadgeCheck}
            title="Digital ID"
            desc="Register and receive a secure QR-based digital identity."
          />
          <FeatureItem
            icon={MapPin}
            title="Live Tracking"
            desc="GPS-based location tracking directly through the browser."
          />
          <FeatureItem
            icon={LifeBuoy}
            title="SOS Button"
            desc="Instantly share location with authorities in emergencies."
          />
          <FeatureItem
            icon={LocateFixed}
            title="Geo-fencing Alerts"
            desc="Get notified when moving outside designated zones."
          />
          <FeatureItem icon={FileText} title="Incident Reporting" desc="Report with text, photo, and audio uploads." />
          <FeatureItem
            icon={WifiOff}
            title="Offline Support"
            desc="Core features work in low-network areas via caching."
          />
        </CardContent>
      </Card>

      <Card className="border-blue-100">
        <CardHeader>
          <CardTitle className="text-center text-blue-700">For Authorities (Dashboard)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FeatureItem icon={Map} title="Real-time Map" desc="Monitor tourist locations with anonymous IDs." />
          <FeatureItem icon={AlertTriangle} title="SOS Alerts" desc="High-priority notifications and triage queue." />
          <FeatureItem
            icon={NotebookText}
            title="Incident Logs"
            desc="Detailed reports with timestamp, location, and media."
          />
          <FeatureItem
            icon={SquareDashedBottomCode}
            title="Geo-fence Management"
            desc="Create and manage safe/unsafe zones."
          />
          <FeatureItem
            icon={BarChart3}
            title="Analytics"
            desc="Identify high-risk zones and patterns to improve safety."
          />
        </CardContent>
      </Card>
    </div>
  )
}

function FeatureItem({
  icon: Icon,
  title,
  desc,
}: {
  icon: any
  title: string
  desc: string
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-md bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <div>
        <div className="font-medium">{title}</div>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  )
}
