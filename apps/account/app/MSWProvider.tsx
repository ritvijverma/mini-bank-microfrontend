"use client";

import { useEffect, useState } from "react";

export function MSWProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const startWorker = async () => {
      const { worker } = await import("../mocks/browser");

      await worker.start({
        onUnhandledRequest: "bypass",
      });

      setReady(true);
    };

    startWorker();
  }, []);

  if (!ready) {
    return <div>Starting mock server...</div>;
  }

  return children;
}