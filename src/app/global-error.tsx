"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 font-sans text-espresso">
        <h2 className="font-serif text-2xl">Something went wrong</h2>
        <p className="mt-2 max-w-md text-center text-sm text-espresso-soft">
          {error.message}
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-full bg-espresso px-8 py-3 text-xs uppercase tracking-[0.15em] text-cream"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
