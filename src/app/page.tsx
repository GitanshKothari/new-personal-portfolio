import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <main className="min-h-screen bg-purple-noir flex flex-col items-center justify-center gap-8 p-6">
      <h1 className="text-4xl font-bold text-primary">Hello Purple-Noir 🌌</h1>
      <p className="text-muted-foreground">
        If you see a dark background with purple accents, your theme is working!
      </p>

      {/* Primary Button */}
      <Button>Primary Button</Button>

      {/* Secondary Button */}
      <Button variant="secondary">Secondary Button</Button>

      {/* Accent Badge */}
      <Badge>Accent Badge</Badge>

      {/* Card demo */}
      <Card className="w-80">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          This card uses <span className="text-primary">primary</span> and{" "}
          <span className="text-accent">accent</span> colors.
        </CardContent>
      </Card>
    </main>
  )
}
