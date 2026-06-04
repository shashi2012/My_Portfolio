"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-center text-foreground">
      <div className="max-w-md">
        <p className="text-sm font-medium text-cyan-200">Something went sideways.</p>
        <h1 className="mt-3 text-3xl font-semibold">The portfolio could not load.</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Try refreshing the experience. The page is static, so this is usually temporary.
        </p>
        <Button className="mt-6" onClick={reset} variant="premium">
          Try again
        </Button>
      </div>
    </main>
  );
}
