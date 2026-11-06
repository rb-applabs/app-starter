
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    name: "Project Intelligence Hub",
    description: "KI-gestützte Projekt- und Vorgangsverwaltung",
    status: "In Planung",
  },
  {
    name: "SafePlug Solutions",
    description: "Intelligenter Konfigurator für Stromausfallsicherheit",
    status: "Konzeptphase",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              Development Workspace
            </p>
            <h1 className="text-3xl font-bold tracking-tight">
              RB AppLabs
            </h1>
          </div>
          <Badge variant="secondary">App Starter v0.1</Badge>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">
            Unsere Anwendungen
          </h2>
          <p className="text-muted-foreground">
            Eine gemeinsame technische Grundlage für unabhängige
            Web-App-Projekte.
          </p>
        </section>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.name}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between gap-3">
                <Badge variant="outline">{project.status}</Badge>
                <Button variant="outline" disabled>
                  Demnächst
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="border-t pt-6 text-sm text-muted-foreground">
          RB AppLabs · Next.js · TypeScript · shadcn/ui
        </footer>
      </div>
    </main>
  );
}
