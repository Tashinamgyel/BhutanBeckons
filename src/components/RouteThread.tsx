interface RouteThreadProps {
  locations: string[];
  compact?: boolean;
}

export function RouteThread({ locations, compact = false }: RouteThreadProps) {
  return (
    <div className={`route-thread${compact ? " route-thread--compact" : ""}`}>
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
