"use client"; //Error boundaries must be Client Components

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html>
      <h2>Global Error </h2>
    </html>
  );
}
