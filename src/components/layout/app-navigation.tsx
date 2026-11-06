import Link from "next/link";
import { appConfig } from "@/config/app";

export function AppNavigation() {
  return (
    <nav aria-label="Hauptnavigation">
      <div className="flex flex-wrap gap-2">
        {appConfig.navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
