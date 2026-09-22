"use client";

import { useEffect, useRef, useState } from "react";

let isMockingStarted = false;

export function MSWProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current || isMockingStarted) {
      return;
    }

    startedRef.current = true;
    isMockingStarted = true;

    const startWorker = async () => {
      try {
        const { worker } = await import("../mocks/browser");

        await worker.start({
          onUnhandledRequest: "bypass",
        });

        setReady(true);
      } catch (error) {
        if (
          error instanceof Error &&
          /already enabled network|cannot configure an already enabled network/i.test(
            error.message,
          )
        ) {
          setReady(true);
          return;
        }

        console.error("Failed to start MSW worker", error);
      }
    };

    void startWorker();
  }, []);

  if (!ready) {
    return <div>Starting mock server...</div>;
  }

  return children;
}