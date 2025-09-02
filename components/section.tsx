import type { ReactNode } from "react"

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          {subtitle ? <p className="mt-3 text-pretty text-lg text-muted-foreground">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  )
}
