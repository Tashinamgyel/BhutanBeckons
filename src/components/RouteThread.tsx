"use client";

import { useEffect, useRef } from "react";

interface RouteThreadProps {
  locations: string[];
  compact?: boolean;
}

export function RouteThread({ locations, compact = false }: RouteThreadProps) {
  const threadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const thread = threadRef.current;

    if (!thread) {
      return;
    }

    const revealThread = () => thread.classList.add("route-thread--drawn");

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      revealThread();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealThread();
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(thread);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={threadRef} className={`route-thread${compact ? " route-thread--compact" : ""}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 720 86"
        preserveAspectRatio="none"
        className="route-thread__line"
      >
        <path
          pathLength="1"
          d="M10 55 C92 55 94 18 180 30 S295 78 375 49 S483 8 548 32 S640 66 710 27"
        />
      </svg>
      <ol aria-label={`Route: ${locations.join(" to ")}`}>
        {locations.map((location, index) => (
          <li key={`${location}-${index}`}>
            <span aria-hidden="true" />
            {location}
          </li>
        ))}
      </ol>
    </div>
  );
}
